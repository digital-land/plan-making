import { useState, useEffect, useMemo } from "preact/hooks";
import {
  NumberSchema,
  ObjectShape,
  StringSchema,
  ValidationError,
  number,
  object,
  string,
} from "yup";
import { loadJson } from "src/utils";
import DynamicForm from "./components/DynamicForm";
import FormPage from "./components/FormPage";
import { FormState, FormValue, FormPageSchema } from "./types";

import "./SiteSelectionForm.css";

interface SiteSelectionForm {
  filepath?: string;
  data?: FormPageSchema;
}

const createValidationSchema = (key: string, formSchema: FormPageSchema) => {
  let validationShape: StringSchema | NumberSchema | null = null;

  const property = formSchema.properties?.[key];

  switch (property?.type) {
    case "string":
      validationShape = string();
      break;
    case "number":
      validationShape = number();
      break;
  }

  if (validationShape && formSchema.required?.includes(key)) {
    validationShape = validationShape.required(`This field is required.`);
  }

  return object({ [key]: validationShape } as ObjectShape);
};

const addChildProperties = (
  baseFormSchema: FormPageSchema,
  newFormSchema: FormPageSchema,
  formValues: FormState,
) => {
  let newProperties: Record<string, FormPageSchema> = {};
  let newRequired: ReadonlyArray<string> = [];

  const childSchema = createFlatFormSchema(newFormSchema, formValues);

  newProperties = {
    ...baseFormSchema.properties,
    ...childSchema.properties,
  };

  if (childSchema.required?.length) {
    newRequired = [
      ...(baseFormSchema.required as string[]),
      ...childSchema.required,
    ];
  }

  const updatedFormSchema: FormPageSchema = {
    ...baseFormSchema,
    properties: newProperties,
    required: newRequired,
  };

  return updatedFormSchema;
};

const createFlatFormSchema = (
  formSchema: FormPageSchema,
  formValues: FormState,
) => {
  let newSchema: FormPageSchema = {
    type: formSchema.type,
    title: formSchema.title,
    dependencies: {},
    properties: {},
    required: [],
  };

  if (formSchema.required?.length) {
    newSchema.required = formSchema.required;
  }

  const propertyKeys = Object.keys(formSchema?.properties || {});

  propertyKeys.forEach((propertyKey) => {
    if (!formSchema.properties?.[propertyKey]) {
      return;
    }

    if (formSchema.properties?.[propertyKey]?.type === "object") {
      newSchema = addChildProperties(
        newSchema,
        formSchema.properties[propertyKey],
        formValues,
      );
    } else {
      newSchema.properties = {
        ...newSchema.properties,
        [propertyKey]: formSchema.properties[propertyKey],
      };
    }

    if (
      formSchema.dependencies &&
      formSchema.dependencies[propertyKey] &&
      formValues[propertyKey]
    ) {
      newSchema = addChildProperties(
        newSchema,
        formSchema.dependencies[propertyKey],
        formValues,
      );
    }
  });

  return newSchema;
};

const SiteSelectionForm = ({ filepath, data }: SiteSelectionForm) => {
  const [baseSchema, setBaseSchema] = useState<FormPageSchema | null>(null);

  const [formData, setFormData] = useState<FormState>({});

  const [currentPage, setCurrentPage] = useState(0);

  const [errors, setErrors] = useState<Record<string, ReadonlyArray<string>>>(
    {},
  );

  useEffect(() => {
    if (data) {
      setBaseSchema(data);
    } else if (filepath) {
      loadJson(filepath).then((data) => {
        setBaseSchema(data);
      });
    } else {
      setBaseSchema(null);
    }
  }, [setBaseSchema, filepath, data]);

  const formSchema: FormPageSchema | null = useMemo(
    () => baseSchema && createFlatFormSchema(baseSchema, formData),
    [baseSchema, formData],
  );

  if (!formSchema || !formSchema?.properties) {
    return null;
  }

  const propertyKeys = useMemo(
    () => Object.keys(formSchema.properties || {}),
    [formSchema],
  );

  const currentPageId = useMemo(
    () => propertyKeys[currentPage],
    [propertyKeys, currentPage],
  );

  const currentPageSchema = useMemo(
    () => createValidationSchema(currentPageId, formSchema),
    [currentPageId, formSchema],
  );

  const handleBackClicked = () => {
    if (!formSchema || currentPage <= 0) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const handleContinueClicked = () => {
    if (!formSchema || currentPage >= propertyKeys.length - 1) {
      return;
    }

    try {
      currentPageSchema.validateSync({
        [currentPageId]: formData[currentPageId],
      });

      setCurrentPage(currentPage + 1);
      setErrors({ [currentPageId]: [] });
    } catch (error) {
      const validationError = error as ValidationError;
      setErrors({ [currentPageId]: validationError.errors });
    }
  };

  const handleFormValueChange = (id: string, value: FormValue) => {
    const newState = {
      ...formData,
      [id]: value,
    };

    setFormData(newState);
  };

  return (
    <FormPage
      title={formSchema.properties[currentPageId].title}
      subtitle={formSchema.properties[currentPageId].subtitle}
      onBackClicked={handleBackClicked}
      onContinueClicked={handleContinueClicked}
    >
      <DynamicForm
        id={currentPageId}
        formPageSchema={formSchema.properties[currentPageId]}
        value={formData[currentPageId]}
        onFormValueChange={handleFormValueChange}
      />
      {!!errors[currentPageId]?.length && <div>{errors[currentPageId][0]}</div>}
    </FormPage>
  );
};

export default SiteSelectionForm;
