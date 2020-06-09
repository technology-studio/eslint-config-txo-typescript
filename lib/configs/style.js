/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-06-02T11:36:16+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

module.exports = {
  rules: {
    // require trailing commas in multiline object literals
    'comma-dangle': ['error', 'always-multiline'],
    // disable this rule due flow doesn't support numbers as keys so it's needed to use computed key
    'no-useless-computed-key': 'off',
  },
}
