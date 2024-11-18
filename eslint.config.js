import typescriptEslint from 'typescript-eslint'

import {
  stylisticConfig,
  typescriptConfigList,
} from './lib/index.js'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default typescriptEslint.config(
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
