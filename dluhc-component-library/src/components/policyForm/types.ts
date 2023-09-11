import { Boundary } from "../maps/types";
import {
  BOUNDARY_KEY,
  DESCRIPTION_KEY,
  REFERENCE_KEY,
  REQUIREMENTS,
  THEMES_KEY,
  TITLE_KEY,
} from "./constants";

export interface FormState {
  [REFERENCE_KEY]: string;
  [TITLE_KEY]: string;
  [DESCRIPTION_KEY]: string;
  [REQUIREMENTS]: string;
  [BOUNDARY_KEY]: Boundary;
  [THEMES_KEY]: ReadonlyArray<string>;
}

export type FormValue = FormState[keyof FormState];
