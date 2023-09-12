import { FormState } from "./types";

export const REFERENCE_KEY = "reference";
export const TITLE_KEY = "title";
export const DESCRIPTION_KEY = "description";
export const REQUIREMENTS = "requirements";
export const BOUNDARY_KEY = "boundary";
export const THEMES_KEY = "themes";

export const FORM_lABELS = {
  [REFERENCE_KEY]: "Reference",
  [TITLE_KEY]: "Title",
  [DESCRIPTION_KEY]: "Description",
  [REQUIREMENTS]: "Requirements",
  [BOUNDARY_KEY]: "Draw a boundary",
  [THEMES_KEY]: "Themes",
};

export const INITIAL_FORM_STATE: FormState = {
  [REFERENCE_KEY]: "",
  [TITLE_KEY]: "",
  [DESCRIPTION_KEY]: "",
  [REQUIREMENTS]: "",
  [BOUNDARY_KEY]: [],
  [THEMES_KEY]: [],
};

export const THEME_OPTIONS = [
  { key: "artsCultureHeritage", label: "Arts, Culture and Heritage" },
  { key: "economy", label: "Economy" },
  { key: "environmentAndGreenspace", label: "Environment and Greenspace" },
  { key: "gettingAround", label: "Getting Around" },
  { key: "livingAndHousing", label: "Living and Housing" },
  { key: "cityLife", label: "City Life" },
];
