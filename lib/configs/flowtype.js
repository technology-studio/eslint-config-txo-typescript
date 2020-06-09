/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-06-02T11:52:11+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

module.exports = {
  extends: [
    'plugin:flowtype/recommended'
  ],
  plugins: [
    'flowtype'
  ],
  rules: {
    'flowtype/semi': ['error', 'never'],
    'flowtype/array-style-complex-type': ['error', 'shorthand'],
    'flowtype/array-style-simple-type': ['error', 'shorthand'],
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/delimiter-dangle': ['error', 'always-multiline'],
    'flowtype/generic-spacing': ['error', 'never'],
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-flow-fix-me-comments': ['warn', 'TODO:'],
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]*)+$'],
  },
}
