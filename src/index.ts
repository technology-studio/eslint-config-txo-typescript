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
import eslintPluginEslintCommunityEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { flatConfigs as eslintPluginImportFlatConfigs } from 'eslint-plugin-import'
import eslintPluginStylistic from '@stylistic/eslint-plugin'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintConfigLove from 'eslint-config-love'

import { typescriptRules } from './configs/typescript'
import { loveRules } from './configs/love'
import { importRules } from './configs/import'
import { eslintCommentsRules } from './configs/eslint-comments'

// TODO: remove after migrating to prettier
/** @deprecated will be replaced with prettier */
export const stylisticConfig: TSESLint.FlatConfig.Config = {
  ...eslintPluginStylistic.configs.customize({
    flat: true,
    braceStyle: '1tbs',
  }),
}

const linterOptionsConfig: TSESLint.FlatConfig.Config = {
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
}

export const typescriptConfigList: TSESLint.FlatConfig.ConfigArray = [
  linterOptionsConfig,
  ...typescriptEslintConfigs.recommendedTypeChecked,
  ...typescriptEslintConfigs.stylisticTypeChecked,
  eslintPluginEslintCommunityEslintComments.recommended,
  eslintPluginImportFlatConfigs.typescript,
  eslintConfigLove,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      strict: 'error',
      ...typescriptRules,
      ...loveRules,
      ...importRules,
      ...eslintCommentsRules,
    },
  },
]

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
    jest: eslintPluginJest,
  },
  rules: {
    ...eslintPluginJest.configs.recommended.rules,
  },
}

export const javascriptConfig: TSESLint.FlatConfig.Config = {
  rules: {
    strict: 'error',
    ...loveRules,
    ...importRules,
    ...eslintCommentsRules,
  },
  ...linterOptionsConfig,
}
