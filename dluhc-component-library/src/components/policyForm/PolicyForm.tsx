import { useState } from "preact/hooks";
import { Input, Textarea } from "../formComponents";
import MapComponent from "../maps/MapComponent";
import {
  BOUNDARY_KEY,
  DESCRIPTION_KEY,
  FORM_lABELS,
  INITIAL_FORM_STATE,
  REQUIREMENTS,
  TITLE_KEY,
} from "./constants";
import { FormState, FormValue } from "./types";

const PolicyForm = () => {
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);

  const handleValueChange = (key: string, value: FormValue) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const handleSaveClicked = () => {
    console.log(formState);
  };

  return (
    <div>
      <h1 className="my-2 text-4xl font-bold">Create a Policy</h1>
      <Input
        label={FORM_lABELS[TITLE_KEY]}
        value={formState[TITLE_KEY]}
        onChange={(value) => handleValueChange(TITLE_KEY, value)}
      />

      <Textarea
        label={FORM_lABELS[DESCRIPTION_KEY]}
        className="my-4"
        value={formState[DESCRIPTION_KEY]}
        onChange={(value) => handleValueChange(DESCRIPTION_KEY, value)}
        maxLength={350}
      />

      <Textarea
        label={FORM_lABELS[REQUIREMENTS]}
        className="my-4"
        value={formState[REQUIREMENTS]}
        onChange={(value) => handleValueChange(REQUIREMENTS, value)}
      />

      <div className="my-4">
        <label className="text-2xl font-bold">
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

      <button
        className="mt-8 bg-green-700 hover:bg-green-800 text-white py-1 px-2"
        onClick={handleSaveClicked}
      >
        Save
      </button>
    </div>
  );
};

export default PolicyForm;
