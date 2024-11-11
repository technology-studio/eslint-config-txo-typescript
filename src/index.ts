/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import globals from 'globals'
import typescriptEslint, {
  configs as typescriptEslintConfigs,
  parser,
} from 'typescript-eslint'
import type { TSESLint } from '@typescript-eslint/utils'
import love from 'eslint-config-love'
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { flatConfigs as eslintImportFlatConfigs } from 'eslint-plugin-import'
import eslintImportRecommendedFlatConfig from 'eslint-plugin-import/config/flat/recommended'
import stylistic from '@stylistic/eslint-plugin'
import jestPlugin from 'eslint-plugin-jest'

import { typescriptRules } from './configs/typescript'
import { standardRules } from './configs/standard'
import { importRules } from './configs/import'
import { eslintCommentsRules } from './configs/eslint-comments'

const stylisticConfig: TSESLint.FlatConfig.Config = {
  files: ['**/*.ts', '**/*.tsx'],
  ...stylistic.configs.customize({
    flat: true,
    braceStyle: '1tbs',
  }),
}

const typescriptConfig: TSESLint.FlatConfig.Config = {
  files: ['**/*.ts', '**/*.tsx'],
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

const jestConfig: TSESLint.FlatConfig.Config = {
  files: ['**/__tests__/**/*.ts', '**/__tests__/**/*.tsx'],
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

const config = typescriptEslint.config(
  {
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
  },
  ...typescriptEslintConfigs.recommendedTypeChecked,
  ...typescriptEslintConfigs.stylisticTypeChecked,
  love,
  eslintComments.recommended,
  // manually create the `eslint-plugin-import` recommended config because `eslint-config-love` already defines `plugins.import` which causes a conflict
  {
    name: 'import/recommended',
    ...eslintImportRecommendedFlatConfig,
  },
  eslintImportFlatConfigs.typescript,
  stylisticConfig,
  typescriptConfig,
  jestConfig,
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
)

export default config
