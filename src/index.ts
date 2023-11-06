/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'
import globals from 'globals'

import { typescriptRules } from './configs/typescript'
import { standardRules } from './configs/standard'
import { importRules } from './configs/import'
import { eslintCommentsRules } from './configs/eslint-comments'

const jestPlugin = require('eslint-plugin-jest')
const { FlatCompat } = require('@eslint/eslintrc')
const Parser = require('@typescript-eslint/parser')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const typescriptConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    globals: {
      ...globals.jest,
    },
    parser: Parser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  plugins: {
    jest: jestPlugin,
  },
  rules: {
    ...jestPlugin.configs.recommended.rules,
    strict: 'error',
    ...typescriptRules,
    ...standardRules,
    ...importRules,
    ...eslintCommentsRules,
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
}

const config: Linter.FlatConfig[] = [
  {
    ignores: [
      'commitlint.config.js',
      'jest.config.js',
      'lib',
      'release.config.js',
      'eslint.config.js',
    ],
  },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'standard-with-typescript',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  typescriptConfig,
  {
    files: ['__tests__/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './__tests__/tsconfig.json',
      },
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      strict: 'error',
      ...standardRules,
      ...importRules,
      ...eslintCommentsRules,
    },
  },
]

export default config
