/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-01-22T20:01:74+01:00
 * @Copyright: Technology Studio
**/

module.exports = {
  rules: {
    'eslint-comments/no-unused-disable': process.env.DISABLE_ESLINT_HEAVY_RULES != null
      ? 'off'
      : 'error',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
}
