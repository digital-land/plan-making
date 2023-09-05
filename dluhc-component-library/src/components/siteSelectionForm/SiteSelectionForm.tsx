import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { useState, useEffect, useMemo } from "preact/hooks";
import { ValidationError } from "yup";
import { loadJson } from "src/utils";
import DynamicForm from "./components/DynamicForm";
import FormPage from "./components/FormPage";
import { FormState, FormValue, FormPageSchema, UiSchema } from "./types";

import "./SiteSelectionForm.css";
import { createValidationSchema } from "./utils";
import { uploadFile } from "./s3";

interface SiteSelectionForm {
  filepath?: string;
  data?: FormPageSchema;
  uiSchema?: UiSchema;
}

const addChildProperties = (
  baseFormSchema: FormPageSchema,
  newFormSchema: FormPageSchema,
  formValues: FormState,
) => {
  const childSchema = createFlatFormSchema(newFormSchema, formValues);

  const newProperties: Record<string, FormPageSchema> = {
    ...baseFormSchema.properties,
    ...childSchema.properties,
  };

  let newRequired: ReadonlyArray<string> = [...(baseFormSchema.required ?? [])];

  if (childSchema.required?.length) {
    newRequired = [...newRequired, ...childSchema.required];
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
    required: formSchema.required ?? [],
  };

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

const queryClient = new QueryClient();

const SiteSelectionForm = ({ filepath, data, uiSchema }: SiteSelectionForm) => {
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

  const handleSubmitClicked = () => {
    uploadFile("test_key", formData);
  };

  const handleFormValueChange = (id: string, value: FormValue) => {
    const newState = {
      ...formData,
      [id]: value,
    };

    setFormData(newState);
  };

  return (
    <QueryClientProvider client={queryClient}>
      {
        (
          <FormPage
            title={formSchema.properties[currentPageId].title}
            subtitle={formSchema.properties[currentPageId].subtitle}
            onBackClicked={handleBackClicked}
            onContinueClicked={handleContinueClicked}
            onSubmitClicked={handleSubmitClicked}
          >
            <DynamicForm
              id={currentPageId}
              formPageSchema={formSchema.properties[currentPageId]}
              uiSchema={uiSchema?.[currentPageId]}
              value={formData[currentPageId]}
              onFormValueChange={handleFormValueChange}
            />
            {!!errors[currentPageId]?.length && (
              <div>{errors[currentPageId][0]}</div>
            )}
          </FormPage>
        ) as ReactNode
      }
    </QueryClientProvider>
  );
};

export default SiteSelectionForm;
