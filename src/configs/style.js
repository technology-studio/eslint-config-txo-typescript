/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T11:36:16+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  rules: {
    'comma-dangle': 'off', // NOTE: this is handled by @typescript-eslint/comma-dangle
    'no-dupe-keys': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'import/order': ['error', {
      'newlines-between': 'always',
      groups: [
        ['builtin', 'external'],
        'internal',
        'parent',
        'sibling',
        'index',
      ],
    }],
    'no-restricted-imports': ['error', {
      patterns: ['../**'],
    }],
  },
}
