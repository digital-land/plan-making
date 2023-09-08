import {
  BOUNDARY_KEY,
  DESCRIPTION_KEY,
  REQUIREMENTS,
  TITLE_KEY,
} from "./constants";

export interface FormState {
  [TITLE_KEY]: string;
  [DESCRIPTION_KEY]: string;
  [REQUIREMENTS]: string;
  [BOUNDARY_KEY]: Boundary;
}

export type FormValue = string | Boundary;
