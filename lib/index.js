'use strict'; // eslint-disable-line

module.exports = {
  extends: [
    './configs/typescript',
    // './configs/standard',
    './configs/style',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    strict: 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array',
    }],
    '@typescript-eslint/semi': 'off',
    'no-dupe-keys': 'error',
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'typeLike',
      format: ['PascalCase'],
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
  },
}
