import { Boundary } from "../maps/types";
import {
  DESCRIPTION_KEY,
  REFERENCE_KEY,
  REQUIREMENTS,
  SUPPLEMENTARY_TEXT_KEY,
  THEMES_KEY,
  TITLE_KEY,
  BOUNDARY_KEY,
} from "./constants";

export interface Policy {
  [REFERENCE_KEY]: string;
  [TITLE_KEY]: string;
  [DESCRIPTION_KEY]: string;
  [REQUIREMENTS]: ReadonlyArray<string>;
  [THEMES_KEY]: ReadonlyArray<string>;
  [SUPPLEMENTARY_TEXT_KEY]: string;
  [BOUNDARY_KEY]: Boundary;
}

export type FormValue = Policy[keyof Policy];
