import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { useState, useEffect, useMemo } from "preact/hooks";
import { ValidationError } from "yup";
import { loadJson } from "src/utils";
import DynamicForm from "./components/DynamicForm";
import FormPage from "./components/FormPage";
import CheckAnswers from "./components/CheckAnswers";
import { FormState, FormValue, FormPageSchema, UiSchema } from "./types";
import {
  clearFormData,
  createValidationSchema,
  getFormData,
  storeFormData,
} from "./utils";
import { uploadFile } from "src/api/aws/api";
import { CHECK_ANSWERS_KEY, DYNAMIC_FORM_KEY } from "./constants";

interface SiteSelectionForm {
  filepath?: string;
  schema?: FormPageSchema;
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

const PAGES = [DYNAMIC_FORM_KEY, CHECK_ANSWERS_KEY];

const SiteSelectionForm = ({
  filepath,
  schema,
  uiSchema,
}: SiteSelectionForm) => {
  const [baseSchema, setBaseSchema] = useState<FormPageSchema | null>(null);

  const [formData, setFormData] = useState<FormState>({});

  const [currentPage, setCurrentPage] = useState(0);

  const [errors, setErrors] = useState<Record<string, ReadonlyArray<string>>>(
    {},
  );

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    getFormData().then((retrievedFormData?: FormState) => {
      setFormData(retrievedFormData ?? {});
    });
  });

  useEffect(() => {
    getFormData().then((schema?: FormState) => {
      setFormData(schema ?? {});
    });
    if (schema) {
      setBaseSchema(schema);
    } else if (filepath) {
      loadJson(filepath).then((schema) => {
        setBaseSchema(schema);
      });
    } else {
      setBaseSchema(null);
    }
  }, [setBaseSchema, filepath, schema]);

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

  const handleCancelClicked = () => {
    if (activePage <= 0) {
      return;
    }

    setActivePage(activePage - 1);
  };

  const handleContinueClicked = () => {
    if (!formSchema || currentPage >= propertyKeys.length) {
      return;
    }

    if (currentPage >= propertyKeys.length - 1) {
      setActivePage(activePage + 1);
      return;
    }

    try {
      currentPageSchema.validateSync({
        [currentPageId]: formData[currentPageId],
      });

      storeFormData(formData);

      setCurrentPage(currentPage + 1);
      setErrors({ [currentPageId]: [] });
    } catch (error) {
      const validationError = error as ValidationError;
      setErrors({ [currentPageId]: validationError.errors });
    }
  };

  const handleSubmitClicked = () => {
    uploadFile("local_plan", formData).then(() => clearFormData());
  };

  const handleFormValueChange = (id: string, value: FormValue) => {
    const newState = {
      ...formData,
      [id]: value,
    };

    setFormData(newState);
  };

  const renderPage = () => {
    if (!formSchema || !formSchema.properties) {
      return;
    }

    const page = PAGES[activePage];

    switch (page) {
      case DYNAMIC_FORM_KEY:
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
              uiSchema={uiSchema?.[currentPageId]}
              value={formData[currentPageId]}
              onFormValueChange={handleFormValueChange}
            />
            {!!errors[currentPageId]?.length && (
              <div>{errors[currentPageId][0]}</div>
            )}
          </FormPage>
        ) as ReactNode;

      case CHECK_ANSWERS_KEY:
        return (
          <CheckAnswers
            formSchema={formSchema}
            formData={formData}
            onBackClicked={handleCancelClicked}
            onSubmitClicked={handleSubmitClicked}
          />
        ) as ReactNode;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {renderPage()}
    </QueryClientProvider>
  );
};

export default SiteSelectionForm;
