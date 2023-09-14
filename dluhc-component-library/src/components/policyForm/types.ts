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

export interface FormState {
  [REFERENCE_KEY]: string;
  [TITLE_KEY]: string;
  [DESCRIPTION_KEY]: string;
  [REQUIREMENTS]: ReadonlyArray<string>;
  [BOUNDARY_KEY]: Boundary;
  [THEMES_KEY]: ReadonlyArray<string>;
  [SUPPLEMENTARY_TEXT_KEY]: string;
}

export interface PolicyData {
  reference: number;
  title: string;
  description: string;
  requirements: string[];
  boundary: number[][];
  themes: string[];
  supplementaryText: string;
}

export type FormValue = FormState[keyof FormState];
