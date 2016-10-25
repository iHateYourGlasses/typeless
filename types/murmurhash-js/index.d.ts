// Type definitions for murmurhash-js v1.0.0
// Project: https://github.com/mikolalysenko/murmurhash-js
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/wikiwi/typeless

// See: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12189.

import * as murmur2 from "./murmurhash2_gc";
import * as murmur3 from "./murmurhash3_gc";

declare const murmur: typeof murmur3 & {
    murmur3: typeof murmur3;
    murmur2: typeof murmur2;
};

export = murmur;
