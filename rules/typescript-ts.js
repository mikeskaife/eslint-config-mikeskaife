// https://www.npmjs.com/package/eslint-plugin-react

/* eslint-disable no-undef */

module.exports = {
  'plugins': ['@typescript-eslint'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': './tsconfig.json'
  },

  'rules': {
    // Require that member overloads be consecutive (adjacent-overload-signatures from TSLint)
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // Requires using either T[] or Array<T> for arrays (array-type from TSLint)
    '@typescript-eslint/array-type': 'warn',

    // Enforces that types will not be used (ban-types from TSLint)
    '@typescript-eslint/ban-types': 'off',

    // Bans “// @ts-ignore” comments from being used (ban-ts-ignore from TSLint)
    '@typescript-eslint/ban-ts-ignore': 'warn',

    // Enforce camelCase naming convention
    '@typescript-eslint/camelcase': 'error',

    // Require PascalCased class and interface names (class-name from TSLint)
    '@typescript-eslint/class-name-casing': 'error',

    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'error',

    // Require explicit accessibility modifiers on class properties and methods (member-access from TSLint)
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Enforces naming of generic type variables
    '@typescript-eslint/generic-type-naming': 'off',

    // Enforce consistent indentation (indent from TSLint)
    '@typescript-eslint/indent': 'off',

    // Require a specific member delimiter style for interfaces and type literals
    '@typescript-eslint/member-delimiter-style': 'off',

    // Enforces naming conventions for class members by visibility
    '@typescript-eslint/member-naming': 'off',

    // Require a consistent member declaration order (member-ordering from TSLint)
    '@typescript-eslint/member-ordering': 'error',

    // Enforces the use of as Type assertions instead of <Type> assertions (no-angle-bracket-type-assertion from TSLint)
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',

    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow the declaration of empty interfaces (no-empty-interface from TSLint)
    '@typescript-eslint/no-empty-interface': 'error',

    // Disallow usage of the any type (no-any from TSLint)
    '@typescript-eslint/no-explicit-any': 'off',

    // Forbids the use of classes as namespaces (no-unnecessary-class from TSLint)
    '@typescript-eslint/no-extraneous-class': 'error',

    // Disallow iterating over an array with a for-in loop (no-for-in-array from TSLint)
    '@typescript-eslint/no-for-in-array': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean. (no-inferrable-types from TSLint)
    '@typescript-eslint/no-inferrable-types': 'off',

    // Enforce valid definition of new and constructor. (no-misused-new from TSLint)
    '@typescript-eslint/no-misused-new': 'off',

    // Disallow the use of custom TypeScript modules and namespaces (no-namespace from TSLint)
    '@typescript-eslint/no-namespace': 'warn',

    // Disallows non-null assertions using the ! postfix operator (no-non-null-assertion from TSLint)
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Forbids an object literal to appear in a type assertion expression (no-object-literal-type-assertion from TSLint)
    '@typescript-eslint/no-object-literal-type-assertion': 'off',

    // Disallow the use of parameter properties in class constructors. (no-parameter-properties from TSLint)
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallows invocation of require() (no-require-imports from TSLint)
    '@typescript-eslint/no-require-imports': 'off',

    // Disallow aliasing this (no-this-assignment from TSLint)
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow /// <reference path="" /> comments (no-reference from TSLint)
    '@typescript-eslint/no-triple-slash-reference': 'error',

    // Disallow the use of type aliases (interface-over-type-literal from TSLint)
    '@typescript-eslint/no-type-alias': 'error',

    // Warns when a namespace qualifier is unnecessary (no-unnecessary-qualifier from TSLint)
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // Warns if a type assertion does not change the type of an expression (no-unnecessary-type-assertion from TSLint)
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // Disallow unused variables (no-unused-variable from TSLint)
    '@typescript-eslint/no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': 'error',

    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallows the use of require statements except in import statements (no-var-requires from TSLint)
    '@typescript-eslint/no-var-requires': 'warn',

    // Use function types instead of interfaces with call signatures (callable-types from TSLint)
    '@typescript-eslint/prefer-function-type': 'off',

    // Prefer an interface declaration over a type literal (type T = { ... }) (interface-over-type-literal from TSLint)
    '@typescript-eslint/prefer-interface': 'off',

    // Require the use of the namespace keyword instead of the module keyword to declare custom TypeScript modules. (no-internal-module from TSLint)
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Requires any function or method that returns a Promise to be marked async. (promise-function-async from TSLint)
    '@typescript-eslint/promise-function-async': 'off',

    // When adding two variables, operands must both be of type number or of type string. (restrict-plus-operands from TSLint)
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Require consistent spacing around type annotations (typedef-whitespace from TSLint)
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Warns for any two overloads that could be unified into one. (unified-signatures from TSLint)
    '@typescript-eslint/unified-signatures': 'error'
  }
};

/* eslint-enable no-undef */
