import { JSXInternal } from "node_modules/preact/src/jsx";

export interface TimetablePage<Props extends Record<string, any>> {
  id: string;
  component: (props: Props) => JSXInternal.Element;
  props: Props;
}
