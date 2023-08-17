import { loadJson } from "../../utils";
import FormPage from "./FormPage";
import { useState, useEffect } from "preact/hooks";

interface SiteSelectionForm {
  filepath: string;
}

interface SiteSelectionFormSchema {
  stages: ReadonlyArray<FormStage>;
}

interface FormStage {
  title: string;
  subtitle?: string;
}

const SiteSelectionForm = ({ filepath }: SiteSelectionForm) => {
  const [formSchema, setFormSchema] = useState<SiteSelectionFormSchema>();

  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    loadJson(filepath).then((data) => {
      setFormSchema(data);
    });
  }, [setFormSchema, filepath]);

  const handleBackClicked = () => {
    if (!formSchema || currentStage <= 0) {
      // TODO handle error here, button shouldnt be displayed too
      return;
    }

    setCurrentStage(currentStage - 1);
  };

  const handleContinueClicked = () => {
    if (!formSchema || currentStage >= formSchema?.stages.length - 1) {
      // TODO handle error here, button shouldnt be displayed too
      return;
    }

    setCurrentStage(currentStage + 1);
  };

  if (!formSchema) {
    return null;
  }

  return (
    <FormStage
      data={formSchema.stages[currentStage]}
      onBackClicked={handleBackClicked}
      onContinueClicked={handleContinueClicked}
    />
  );
};

interface FormStageProps {
  data: FormStage;
  onBackClicked: () => void;
  onContinueClicked: () => void;
}

const FormStage = ({
  data,
  onBackClicked,
  onContinueClicked,
}: FormStageProps) => {
  return (
    <FormPage
      title={data.title}
      subtitle={data.subtitle}
      onBackClicked={onBackClicked}
      onContinueClicked={onContinueClicked}
    ></FormPage>
  );
};

export default SiteSelectionForm;
