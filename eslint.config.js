const tseslint = require('typescript-eslint')
const stylisticPlugin = require('@stylistic/eslint-plugin')

const {
  stylisticConfig,
  ignoreList,
  typescriptConfigList,
} = require('./lib')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = tseslint.config(
  // TODO: remove after migrating to prettier
  {
    files: ['**/*.ts'],
    extends: [
      {
        languageOptions: {
          parserOptions: {
            projectService: true,
          },
        },
      },
      {
        plugins: {
          '@stylistic': stylisticPlugin,
        }
      },
      ...typescriptConfigList,
      // TODO: remove after migrating to prettier
      stylisticConfig,
      {
        rules: {
          '@typescript-eslint/no-magic-numbers': 'off',
        },
      },
    ],
  },
  {
    ignores: [
      'commitlint.config.js',
      'jest.config.js',
      'lib',
      '.releaserc.js',
      'eslint.config.js',
      'coverage',
    ]
  }
)

module.exports = config
