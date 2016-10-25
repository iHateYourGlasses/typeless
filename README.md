# typeless

[![Build Status Widget]][build status]

Experimental typescript definitions published under the `@typeless` scope
which will eventually be merged to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

This is a fork of [types-publisher](https://github.com/Microsoft/types-publisher).

## Usage

To use these type definitions include the following in your `tsconfig.json`:

```json
"baseUrl": "./",
"paths": {
  "*": [
    "./node_modules/@typeless/*"
  ]
}
```

And install types like this:

```bash
npm install --save @typeless/jss
```

## Available types

See the [types folder](https://github.com/wikiwi/typeless/tree/master/types).

[build status]: https://travis-ci.org/wikiwi/typeless

[build status widget]: https://img.shields.io/travis/wikiwi/typeless/master.svg?style=flat-square
