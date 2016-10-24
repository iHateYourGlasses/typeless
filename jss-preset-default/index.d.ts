// Type definitions for JSS v0.5.0
// Project: https://github.com/cssinjs/jss-preset-default
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as JSS from "jss";

type Options = {
  extend: any;
  nested: any;
  camelCase: any;
  defaultUnit: any;
  vendorPrefixer: any;
  propsSort: any;
  compose: any;
};

declare const preset: (opts?: Options) => JSS.SetupOptions;
export default preset;
