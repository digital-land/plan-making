import { useState, useEffect, useMemo } from "preact/hooks";
import { loadJson } from "../../utils";
import DynamicForm from "./components/DynamicForm";
import { FormState, FormValue, SiteSelectionFormSchema } from "./types";
import {
  NumberSchema,
  StringSchema,
  ValidationError,
  number,
  object,
  string,
} from "yup";
import "./SiteSelectionForm.css";
import FormPage from "./components/FormPage";

interface SiteSelectionForm {
  filepath?: string;
  data?: SiteSelectionFormSchema;
}

const createValidationSchema = (
  key: string,
  formSchema: SiteSelectionFormSchema,
) => {
  let validationShape: StringSchema | NumberSchema;

  const property = formSchema.properties[key];

  switch (property.type) {
    case "string":
      validationShape = string();
      break;
    case "number":
      validationShape = number();
      break;
  }

  if (validationShape && formSchema.required.includes(key)) {
    validationShape = validationShape.required(`This field is required.`);
  }

  return object({ [key]: validationShape });
};

const SiteSelectionForm = ({ filepath, data }: SiteSelectionForm) => {
  const [formSchema, setFormSchema] =
    useState<SiteSelectionFormSchema | null>();

  const [formData, setFormData] = useState<FormState>({});

  const [currentPage, setCurrentPage] = useState(0);

  const [errors, setErrors] = useState<Record<string, ReadonlyArray<string>>>(
    {},
  );

  useEffect(() => {
    if (data) {
      setFormSchema(data);
    } else if (filepath) {
      loadJson(filepath).then((data) => {
        setFormSchema(data);
      });
    } else {
      setFormSchema(null);
    }
  }, [setFormSchema, filepath, data]);

  if (!formSchema) {
    return null;
  }

  const propertyKeys = useMemo(
    () => Object.keys(formSchema.properties),
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
      // TODO handle error here, button shouldnt be displayed too
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const handleContinueClicked = () => {
    if (!formSchema || currentPage >= propertyKeys.length - 1) {
      // TODO handle error here, button shouldnt be displayed too
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
