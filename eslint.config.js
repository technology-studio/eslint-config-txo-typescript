import {
  jestConfig,
  stylisticConfig,
  typescriptConfigList,
  typescriptEslintConfig
} from './lib/index.js'

/** @type {import('eslint').Linter.Config[]} */
export default typescriptEslintConfig(
  // TODO: remove after migrating to prettier
  {
    files: ['**/*.ts'],
    extends: [
      ...typescriptConfigList,
      // TODO: remove after migrating to prettier
      stylisticConfig,
    ]
  },
  {
    files: ['__tests__/**/*.ts', '__tests__/**/*.tsx'],
    extends: [
      jestConfig,
    ]
  },
  {
    ignores: [
      'commitlint.config.js',
      'jest.config.js',
      '.releaserc.js',
      'eslint.config.js',
      'coverage',
      'lib',
      'node_modules',
    ]
  }
)
