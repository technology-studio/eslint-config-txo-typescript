/**
 * @Author: Ondrej Mikulas <ondrej.mikulas@technologystudio.sk>
 * @Date: 2020-06-03T15:06:38+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array',
    }],
    semi: 'off',
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      enums: 'always-multiline',
      generics: 'ignore',
      tuples: 'always-multiline',
    }],
    '@typescript-eslint/semi': ['error', 'never'],
    'no-dupe-keys': 'error',
    '@typescript-eslint/keyword-spacing': ['error'],
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
    'no-return-await': 'off',
    '@typescript-eslint/return-await': [
      'error',
      'in-try-catch',
    ],
    '@typescript-eslint/strict-boolean-expressions': ['off'],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': ['error'],
    '@typescript-eslint/ban-ts-comment': [
      'error', {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
    '@typescript-eslint/ban-types': [
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
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join('\n'),
            fixWith: 'Record<string, unknown>',
          },
          Function: {
            message: [
              'The `Function` type accepts any function-like value.',
              'It provides no type safety when calling the function, which can be a common source of bugs.',
              'It also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.',
              'If you are expecting the function to accept certain arguments, you should explicitly define the function shape.',
            ].join('\n'),
          },
        },
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
  },
}
