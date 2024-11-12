const typescriptEslint = require('typescript-eslint')

const {
  stylisticConfig,
  ignoreList,
  typescriptConfigList,
} = require('./lib')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = typescriptEslint.config(
  // TODO: remove after migrating to prettier
  {
    files: ['**/*.ts'],
    extends: [
      ...typescriptConfigList,
      // TODO: remove after migrating to prettier
      stylisticConfig,
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
