import { useState, useEffect, useMemo } from "preact/hooks";
import { loadJson } from "../../utils";
import DynamicForm from "./components/DynamicForm";
import { FormState, FormValue, SiteSelectionFormSchema } from "./types";

import "./SiteSelectionForm.css";
import FormPage from "./components/FormPage";

interface SiteSelectionForm {
  filepath?: string;
  data?: SiteSelectionFormSchema;
}

const SiteSelectionForm = ({ filepath, data }: SiteSelectionForm) => {
  const [formSchema, setFormSchema] =
    useState<SiteSelectionFormSchema | null>();

  const [formData, setFormData] = useState<FormState>({});

  const [currentPage, setCurrentPage] = useState(0);

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

  const requiredProperties = useMemo(
    () => formSchema["required"],
    [formSchema],
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

    let continueForm = true;

    if (requiredProperties.includes(currentPageId)) {
      continueForm = validateRequiredProperty();
    }
    if (continueForm) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("Fill in required field");
    }
  };

  const validateRequiredProperty = () => {
    if (!formData[currentPageId]) {
      return false;
    }

    return Object.values(formData[currentPageId]).some((val) => val);
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
    </FormPage>
  );
};

export default SiteSelectionForm;
