/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import globals from 'globals'
import {
  configs as typescriptEslintConfigs,
  parser,
} from 'typescript-eslint'
import type { TSESLint } from '@typescript-eslint/utils'
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { flatConfigs as eslintImportFlatConfigs } from 'eslint-plugin-import'
import eslintImportRecommendedFlatConfig from 'eslint-plugin-import/config/flat/recommended'
import stylistic from '@stylistic/eslint-plugin'
import jestPlugin from 'eslint-plugin-jest'

import { typescriptRules } from './configs/typescript'
import { standardRules } from './configs/standard'
import { importRules } from './configs/import'
import { eslintCommentsRules } from './configs/eslint-comments'

// TODO: remove after migrating to prettier
export const stylisticConfig: TSESLint.FlatConfig.Config = {
  ...stylistic.configs.customize({
    flat: true,
    braceStyle: '1tbs',
  }),
}

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  languageOptions: {
    parser,
    parserOptions: {
      project: './tsconfig.json',
    },
  },
  rules: {
    strict: 'error',
    ...typescriptRules,
    ...standardRules,
    ...importRules,
    ...eslintCommentsRules,
  },
  settings: {
    'import/parsers': {
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
    'import/resolver': {
      typescript: true,
    },
  },
}

export const jestConfig: TSESLint.FlatConfig.Config = {
  languageOptions: {
    globals: {
      ...globals.jest,
    },
    parser,
    parserOptions: {
      project: './__tests__/tsconfig.json',
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './__tests__/tsconfig.json',
      },
    },
  },
  plugins: {
    jest: jestPlugin,
  },
  rules: {
    ...jestPlugin.configs.recommended.rules,
  },
}

export const ignoreList: TSESLint.FlatConfig.Config = {
  ignores: [
    'commitlint.config.js',
    'jest.config.js',
    'lib',
    'release.config.js',
    '.releaserc.js',
    'eslint.config.js',
    'coverage',
    'dist',
  ],
}

export const typescriptEslintRecommendedTypeCheckedConfigList: TSESLint.FlatConfig.ConfigArray = typescriptEslintConfigs.recommendedTypeChecked
export const typescriptEslintStylisticTypeCheckedConfigList: TSESLint.FlatConfig.ConfigArray = typescriptEslintConfigs.stylisticTypeChecked

export { default as loveConfig } from 'eslint-config-love'

export const eslintCommentsConfig = eslintComments.recommended

export const eslintImportConfigList = [
  {
    // manually create the `eslint-plugin-import` recommended config because `eslint-config-love` already defines it in `plugins.import` which causes a conflict
    name: 'import/recommended',
    ...eslintImportRecommendedFlatConfig,
  },
  eslintImportFlatConfigs.typescript,
]

export const linterOptionsConfig: TSESLint.FlatConfig.Config = {
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
}

export const javascriptConfig: TSESLint.FlatConfig.Config = {
  rules: {
    strict: 'error',
    ...standardRules,
    ...importRules,
    ...eslintCommentsRules,
  },
}
