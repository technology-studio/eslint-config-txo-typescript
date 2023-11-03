/* eslint-disable @typescript-eslint/no-unsafe-argument */
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
import { deepMergeIgnoreNil } from '@txo/functional'
import globals from 'globals'

import { typescriptRules } from './configs/typescript'
import { standardRules } from './configs/standard'
import { importRules } from './configs/import'
import { eslintCommentsRules } from './configs/eslint-comments'

const jest = require('eslint-plugin-jest')
const { FlatCompat } = require('@eslint/eslintrc')
const Parser = require('@typescript-eslint/parser')
const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const mergeConfigs = (configs: Linter.FlatConfig[]): Linter.FlatConfig => (
  configs.reduce<Linter.FlatConfig>((flatConfig, config) => (deepMergeIgnoreNil(flatConfig, config) as Linter.FlatConfig), {})
)

const typescriptExtends = mergeConfigs(compat.extends(
  'plugin:@typescript-eslint/recommended-type-checked',
  'plugin:@typescript-eslint/stylistic-type-checked',
  'standard-with-typescript',
  'plugin:@eslint-community/eslint-comments/recommended',
  'plugin:import/recommended',
  'plugin:import/typescript',
))
const javascriptExtends = mergeConfigs(compat.extends(
  'standard',
  'plugin:@eslint-community/eslint-comments/recommended',
  'plugin:import/recommended',
))

const config: Linter.FlatConfig[] = [
  {
    ...typescriptExtends,
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...typescriptExtends.languageOptions,
      globals: {
        ...typescriptExtends.languageOptions?.globals,
        ...globals.jest,
      },
      parser: Parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    linterOptions: {
      ...typescriptExtends.linterOptions,
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      ...typescriptExtends.plugins,
      '@typescript-eslint': typescriptEslintPlugin,
      jest,
    },
    rules: {
      ...typescriptExtends.rules,
      ...jest.configs.recommended.rules,
      strict: 'error',
      ...typescriptRules,
      ...standardRules,
      ...importRules,
      ...eslintCommentsRules,
    },
    settings: {
      ...typescriptExtends.settings,
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    ...javascriptExtends,
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      ...javascriptExtends.rules,
      strict: 'error',
      ...standardRules,
      ...importRules,
      ...eslintCommentsRules,
    },
    linterOptions: {
      ...javascriptExtends.linterOptions,
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      ...javascriptExtends.plugins,
    },
  },
]

export default config
