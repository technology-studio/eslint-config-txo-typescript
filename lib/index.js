/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-06-02T09:52:48+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

module.exports = {
  extends: [
    './configs/flowtype',
    './configs/standard',
    './configs/style',
    './configs/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
}
