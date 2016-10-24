// Type definitions for JSS v5.5.5
// Project: https://github.com/cssinjs/jss
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JSS {
    type RuleDef = { [rule: string]: any };
    type RulesDef = { [name: string]: RuleDef };
    type Plugin = (rule: Rule) => void;

    interface StyleSheetOptions {
        media?: string;
        meta?: string;
        named?: boolean;
        link?: boolean;
        element?: HTMLStyleElement;
        index?: number;
    }

    interface SetupOptions {
        generateClassName?: (stylesStr: string, rule: Rule) => string;
        plugins?: Array<Plugin>;
    }

    interface Rule {
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

    interface StyleSheet {
        classes: any;
        options: StyleSheetOptions;
        attached: boolean;
        attach(): any;
        detach(): void;
        toString(): string;
        addRule(selector: string, rule: RuleDef, options?: StyleSheetOptions): Rule;
        addRule(rule: RuleDef, options?: StyleSheetOptions): Rule;
    }

    interface Registry {
        registry: Array<StyleSheet>;
        toString(): string;
    }

    interface JSS {
        sheets: Registry;
        setup(options: SetupOptions): void;
        use(...plugin: Array<Plugin>): void;
        createStyleSheet(rules?: RulesDef, options?: StyleSheetOptions): StyleSheet;
        removeStyleSheet(sheet: StyleSheet): void;
        createRule(selector: string, rule: RuleDef): Rule;
        createRule(rule: RuleDef): Rule;
    }
}

export type StyleSheetOptions = JSS.StyleSheetOptions;
export type SetupOptions = JSS.SetupOptions;
export type JSS = JSS.JSS;
export type Registry = JSS.Registry;
export type RuleDef = JSS.RuleDef;
export type RulesDef = JSS.RulesDef;
export type Plugin = JSS.Plugin;
export type Rule = JSS.Rule;
export type StyleSheet = JSS.StyleSheet;
export function create(options?: SetupOptions): JSS;
declare const jss: JSS;
export default jss;
