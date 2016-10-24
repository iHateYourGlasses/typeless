// Type definitions for JSS v5.5.5
// Project: https://github.com/cssinjs/jss
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default jss;
export as namespace JSS;

export type RuleDef = { [rule: string]: any };
export type RulesDef = { [name: string]: RuleDef };
export type Plugin = (rule: Rule) => void;

export interface StyleSheetOptions {
    media?: string;
    meta?: string;
    named?: boolean;
    link?: boolean;
    element?: HTMLStyleElement;
    index?: number;
}

export interface SetupOptions {
    generateClassName?: (stylesStr: string, rule: Rule) => string;
    plugins?: Array<Plugin>;
}

export interface Rule {
    name: string;
    type: string;
    selectorText: string;
    className: string;
    style: string;
    originalStyle: string;
    options: {
        named?: boolean;
        className?: string;
        sheet?: StyleSheet;
    };
    applyTo(element: HTMLElement): void;
    prop(name: string, value?: string): string;
    toJSON(): string;
}

export interface StyleSheet {
    classes: any;
    options: StyleSheetOptions;
    attached: boolean;
    attach(): any;
    detach(): void;
    toString(): string;
    addRule(selector: string, rule: RuleDef, options?: StyleSheetOptions): Rule;
    addRule(rule: RuleDef, options?: StyleSheetOptions): Rule;
}

export interface Registry {
    registry: Array<StyleSheet>;
    toString(): string;
}

export interface JSS {
    sheets: Registry;
    setup(options: SetupOptions): void;
    use(...plugin: Array<Plugin>): void;
    createStyleSheet(rules?: RulesDef, options?: StyleSheetOptions): StyleSheet;
    removeStyleSheet(sheet: StyleSheet): void;
    createRule(selector: string, rule: RuleDef): Rule;
    createRule(rule: RuleDef): Rule;
}

export function create(options?: SetupOptions): JSS;

declare const jss: JSS;
