import { useState } from "preact/hooks";
import { Input, MultiSelect, Textarea } from "../formComponents";
import MapComponent from "../maps/MapComponent";
import {
  BOUNDARY_KEY,
  DESCRIPTION_KEY,
  FORM_lABELS,
  INITIAL_FORM_STATE,
  MULTI_ENTRY_TEXT_AREA_KEY,
  REFERENCE_KEY,
  REQUIREMENTS,
  SUPPLEMENTARY_TEXT_KEY,
  THEMES_KEY,
  THEME_OPTIONS,
  TITLE_KEY,
} from "./constants";
import { FormState, FormValue } from "./types";
import MultiItem from "./components/MultiItem";

const PolicyForm = () => {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);

  const handleValueChange = (key: keyof FormState, value: FormValue) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const handleFormSubmit = () => {
    console.log(formState);
  };

  return (
    <div>
      <h1 className="my-2 text-4xl font-bold">Create a Policy</h1>
      <form>
        <h2 className="my-8 text-3xl font-bold">Policy details</h2>

        <div className="my-4">
          <label className="text-xl font-bold">{FORM_lABELS[THEMES_KEY]}</label>
          <MultiSelect
            className="mt-2"
            options={THEME_OPTIONS}
            values={formState[THEMES_KEY]}
            onChange={(value) => handleValueChange(THEMES_KEY, value)}
          />
        </div>

        <Input
          label={FORM_lABELS[TITLE_KEY]}
          value={formState[TITLE_KEY]}
          onChange={(value) => handleValueChange(TITLE_KEY, value)}
        />

        <Input
          label={FORM_lABELS[REFERENCE_KEY]}
          value={formState[REFERENCE_KEY]}
          onChange={(value) => handleValueChange(REFERENCE_KEY, value)}
        />

        <h2 className="my-2 text-3xl font-bold">Policy box</h2>

        <Textarea
          label={FORM_lABELS[DESCRIPTION_KEY]}
          className="my-4"
          value={formState[DESCRIPTION_KEY]}
          onChange={(value) => handleValueChange(DESCRIPTION_KEY, value)}
          maxLength={350}
        />

        {/*time period*/}

        <MultiItem
          label={FORM_lABELS[REQUIREMENTS]}
          values={formState[REQUIREMENTS]}
          input={Input}
          onChange={(value) => handleValueChange(REQUIREMENTS, value)}
        />

        <div className="my-4">
          <label className="text-xl font-bold">
            {FORM_lABELS[BOUNDARY_KEY]}
          </label>
          <MapComponent
            className="my-1"
            style={{ height: "470px", width: "100%" }}
            showDatasets={false}
            value={formState[BOUNDARY_KEY]}
            onChange={(value) => handleValueChange(BOUNDARY_KEY, value)}
          />
        </div>

        <h2 className="my-2 text-3xl font-bold">Supplementary text</h2>

        <Textarea
          label={FORM_lABELS[SUPPLEMENTARY_TEXT_KEY]}
          className="my-4"
          value={formState[SUPPLEMENTARY_TEXT_KEY]}
          onChange={(value) => handleValueChange(SUPPLEMENTARY_TEXT_KEY, value)}
        />

        <MultiItem
          label={FORM_lABELS[MULTI_ENTRY_TEXT_AREA_KEY]}
          values={formState[MULTI_ENTRY_TEXT_AREA_KEY]}
          input={Textarea}
          onChange={(value) =>
            handleValueChange(MULTI_ENTRY_TEXT_AREA_KEY, value)
          }
        />
        <button
          type="button"
          className="mt-8 bg-green-700 hover:bg-green-800 text-white py-1 px-2"
          onClick={handleFormSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PolicyForm;
