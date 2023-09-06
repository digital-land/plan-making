import { JSXInternal } from "node_modules/preact/src/jsx";

export interface TimetablePage {
  id: string;
  component: (props?: any) => JSXInternal.Element;
  props?: any;
}
