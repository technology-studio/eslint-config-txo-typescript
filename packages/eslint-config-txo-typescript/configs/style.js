/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T11:36:16+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  rules: {
    // require trailing commas in multiline object literals
    'comma-dangle': ['error', 'always-multiline'],
    'no-dupe-keys': 'error',
    'no-void': ['error', { allowAsStatement: true }],
  },
}
