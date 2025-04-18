/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T11:14:55+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

export const loveRules: Linter.RulesRecord = {
  'arrow-body-style': ['error', 'as-needed'],
  'no-console': 'error',
  'no-unused-vars': 'off',
  'prefer-template': 'error',
  'keyword-spacing': 'off',
  'camelcase': 'off',
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        consistent: true,
        multiline: true,
      },
      ObjectPattern: {
        consistent: true,
        multiline: true,
      },
      ImportDeclaration: {
        consistent: true,
        multiline: true,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- For two or more properties in import declaration we want to enforce multiline syntax.
        minProperties: 2,
      },
      ExportDeclaration: {
        consistent: true,
        multiline: true,
      },
    },
  ],
  'require-await': 'off',
  'comma-dangle': 'off',
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- We want to allow more nesting (up to 5 callbacks) due to jest tests and memoized components
  'max-nested-callbacks': ['error', 5],
}
