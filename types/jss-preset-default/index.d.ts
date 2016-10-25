// Type definitions for jss-preset-default 0.5.0
// Project: https://github.com/cssinjs/jss-preset-default
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/wikiwi/typeless

export type JSSPresetOptions = {
    extend?: any;
    nested?: any;
    camelCase?: any;
    defaultUnit?: any;
    vendorPrefixer?: any;
    propsSort?: any;
    compose?: any;
};

declare const preset: (opts?: JSSPresetOptions) => JSS.SetupOptions;
export default preset;
