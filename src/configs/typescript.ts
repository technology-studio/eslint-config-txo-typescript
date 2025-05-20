/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2020-06-03T15:06:38+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

export const typescriptRules: Linter.RulesRecord = {
  '@typescript-eslint/array-type': ['error', {
    default: 'array',
    readonly: 'array',
  }],
  '@stylistic/comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
    enums: 'always-multiline',
    generics: 'ignore',
    tuples: 'always-multiline',
  }],
  '@stylistic/keyword-spacing': ['error'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variableLike',
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
      format: [
        'camelCase',
        'PascalCase',
        'UPPER_CASE',
      ],
    },
    {
      selector: 'typeLike',
      format: [
        'PascalCase',
      ],
    },
    {
      selector: 'typeParameter',
      format: [
        'PascalCase',
        'UPPER_CASE',
      ],
    },
  ],
  '@typescript-eslint/no-explicit-any': ['error'],
  '@typescript-eslint/only-throw-error': 'off',
  '@stylistic/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'comma',
      requireLast: true,
    },
    singleline: {
      delimiter: 'comma',
      requireLast: false,
    },
  }],
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/require-await': 'off',
  '@stylistic/indent': 'off',
  '@stylistic/jsx-quotes': ['error', 'prefer-single'],
  '@stylistic/quote-props': 'off',
}
