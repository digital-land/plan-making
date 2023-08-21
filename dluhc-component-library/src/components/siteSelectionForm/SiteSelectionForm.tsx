import { useState, useEffect, useMemo } from "preact/hooks";
import { loadJson } from "../../utils";
import DynamicForm from "./components/DynamicForm";
import { SiteSelectionFormSchema } from "./types";

import "./SiteSelectionForm.css";

interface SiteSelectionForm {
  filepath?: string;
  data?: SiteSelectionFormSchema;
}

const SiteSelectionForm = ({ filepath, data }: SiteSelectionForm) => {
  const [formSchema, setFormSchema] =
    useState<SiteSelectionFormSchema | null>();

  const [currentStage, setCurrentStage] = useState(0);

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

  const handleBackClicked = () => {
    if (!formSchema || currentStage <= 0) {
      // TODO handle error here, button shouldnt be displayed too
      return;
    }

    setCurrentStage(currentStage - 1);
  };

  const handleContinueClicked = () => {
    if (!formSchema || currentStage >= propertyKeys.length - 1) {
      // TODO handle error here, button shouldnt be displayed too
      return;
    }

    setCurrentStage(currentStage + 1);
  };

  return (
    <DynamicForm
      data={formSchema.properties[propertyKeys[currentStage]]}
      onBackClicked={handleBackClicked}
      onContinueClicked={handleContinueClicked}
    />
  );
};

export default SiteSelectionForm;
