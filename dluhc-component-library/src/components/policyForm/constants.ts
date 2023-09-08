import { FormState } from "./types";

export const TITLE_KEY = "title";
export const DESCRIPTION_KEY = "description";
export const REQUIREMENTS = "requirements";
export const BOUNDARY_KEY = "boundary";

export const FORM_lABELS = {
  [TITLE_KEY]: "Title",
  [DESCRIPTION_KEY]: "Description",
  [REQUIREMENTS]: "Requirements",
  [BOUNDARY_KEY]: "Draw a boundary",
};

export const INITIAL_FORM_STATE: FormState = {
  [TITLE_KEY]: "",
  [DESCRIPTION_KEY]: "",
  [REQUIREMENTS]: "",
  [BOUNDARY_KEY]: [],
};
