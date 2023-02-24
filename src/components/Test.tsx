import * as m from "mithril";
import { MithrilTsxComponent } from "mithril-tsx-component";

export interface IFooCompAttrs {
  attrs: {};
}

export function Test({}: IFooCompAttrs): MithrilTsxComponent<IFooCompAttrs> {
  return {
    view: () => <div>Hello World!</div>,
  };
}
