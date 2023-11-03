const txoConfig = require('./lib/index.js')

// console.log(txoConfig.default)
// console.log(JSON.stringify(txoConfig.default, null, 2))

const [typescriptConfig, ...restConfigs] = txoConfig.default

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  { // .eslintignore
    ignores: [
      'commitlint.config.js',
      'jest.config.js',
      'lib',
      'release.config.js',
      '__tests__',
    ],
  },
  typescriptConfig,
  {
    ...typescriptConfig,
    files: ['test/**/*.ts'],
    languageOptions: {
      ...typescriptConfig.languageOptions,
      parserOptions: {
        ...typescriptConfig.languageOptions.parserOptions,
        project: './tsconfig.test.json'
      },
    },
  },
  ...restConfigs
]

module.exports = config
