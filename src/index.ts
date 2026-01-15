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
import eslintPluginEslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import { flatConfigs as eslintPluginImportConfigs } from 'eslint-plugin-import'
import eslintPluginStylistic from '@stylistic/eslint-plugin'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintConfigLove from 'eslint-config-love'

import { typescriptRules } from './configs/typescript.js'
import { loveRules } from './configs/love.js'
import { importRules } from './configs/import.js'
import { eslintCommentsRules } from './configs/eslint-comments.js'

// Extract only settings from a config, excluding plugins and rules
// This allows us to get TypeScript-specific settings from eslint-plugin-import
// without causing plugin redefinition conflicts with eslint-config-love
const extractSettings = (
  config: TSESLint.FlatConfig.Config,
): TSESLint.FlatConfig.Config => {
  const { settings, name } = config
  return {
    ...(name != null ? { name: `${name}/settings-only` } : {}),
    ...(settings != null ? { settings } : {}),
  }
}

// TODO: remove after migrating to prettier
/** @deprecated will be replaced with prettier */
export const stylisticConfig: TSESLint.FlatConfig.Config = {
  ...eslintPluginStylistic.configs.customize({
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
  eslintPluginEslintComments.recommended,
  // Extract only settings from eslint-plugin-import's typescript config
  // (TypeScript file extensions, parsers, resolvers) without the plugin,
  // since eslint-config-love will provide the import plugin
  extractSettings(eslintPluginImportConfigs.typescript),
  // eslint-config-love provides the import plugin and its rules
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
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'expectTypeOf'],
      },
    ],
    '@typescript-eslint/no-magic-numbers': 'off',
  },
}

export {
  type TSESLint,
}
