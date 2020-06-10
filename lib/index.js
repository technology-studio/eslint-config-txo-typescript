'use strict'; // eslint-disable-line

module.exports = {
  extends: [
    './configs/typescript',
    './configs/standard',
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
  },
}
