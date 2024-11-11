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
  '@typescript-eslint/no-restricted-types': [
    'error',
    {
      types: {
        object: {
          message: [
            'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
            'Consider using `Record<string, unknown>` instead, as it allows you to more easily inspect and use the keys.',
          ].join('\n'),
          fixWith: 'Record<string, unknown>',
        },
      },
    },
  ],
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/indent': 'off',
}
