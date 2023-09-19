import { Policy } from "./types";

export const REFERENCE_KEY = "reference";
export const TITLE_KEY = "title";
export const DESCRIPTION_KEY = "description";
export const REQUIREMENTS = "requirements";
export const VALUE_KEY = "value";
export const THEMES_KEY = "themes";
export const SUPPLEMENTARY_TEXT_KEY = "supplementaryText";
export const BOUNDARY_KEY = "boundary";

export const FORM_lABELS = {
  [REFERENCE_KEY]: "Policy number (?)",
  [TITLE_KEY]: "Policy Title (?)",
  [DESCRIPTION_KEY]: "Description",
  [REQUIREMENTS]: "Requirements",
  [VALUE_KEY]: "Draw a boundary",
  [THEMES_KEY]: "Themes",
  [SUPPLEMENTARY_TEXT_KEY]: "Text 1.1",
  [BOUNDARY_KEY]: "Boundaries",
};

export const INITIAL_POLICY_STATE: Policy = {
  [REFERENCE_KEY]: "",
  [TITLE_KEY]: "",
  [DESCRIPTION_KEY]: "",
  [REQUIREMENTS]: [""],
  [VALUE_KEY]: [],
  [THEMES_KEY]: [],
  [SUPPLEMENTARY_TEXT_KEY]: "",
  [BOUNDARY_KEY]: [],
};

export const THEME_OPTIONS = [
  { key: "artsCultureHeritage", label: "Arts, Culture and Heritage" },
  { key: "economy", label: "Economy" },
  { key: "environmentAndGreenspace", label: "Environment and Greenspace" },
  { key: "gettingAround", label: "Getting Around" },
  { key: "livingAndHousing", label: "Living and Housing" },
  { key: "cityLife", label: "City Life" },
];
