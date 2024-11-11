const txoConfig = require('./lib/index.js')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...txoConfig.default,
  {
    files: ['test/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.test.json'
      }
    }
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off' // We can allow numbers in the configs
    },
  },
]

module.exports = config
