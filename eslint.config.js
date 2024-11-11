const stylisticPlugin = require('@stylistic/eslint-plugin')

const {
  typescriptConfig,
  typescriptEslintStylisticTypeCheckedConfigList,
  ignoreList,
} = require('./lib/index.js')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  {
    files: ['test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.test.json'
      }
    }
  },
  // TODO: remove after migrating to prettier
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      '@stylistic': stylisticPlugin,
    }
  },
  // TODO: remove after migrating to prettier
  ...typescriptEslintStylisticTypeCheckedConfigList,
  ignoreList,
]

module.exports = config
