import { Boundary } from "../maps/types";
import {
  BOUNDARY_KEY,
  DESCRIPTION_KEY,
  REFERENCE_KEY,
  REQUIREMENTS,
  SUPPLEMENTARY_TEXT_KEY,
  THEMES_KEY,
  TITLE_KEY,
} from "./constants";

export interface Policy {
  [REFERENCE_KEY]: string;
  [TITLE_KEY]: string;
  [DESCRIPTION_KEY]: string;
  [REQUIREMENTS]: ReadonlyArray<string>;
  [BOUNDARY_KEY]: Boundary;
  [THEMES_KEY]: ReadonlyArray<string>;
  [SUPPLEMENTARY_TEXT_KEY]: string;
}

export type FormValue = Policy[keyof Policy];
