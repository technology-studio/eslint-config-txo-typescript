/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T11:36:16+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  rules: {
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
    ...(process.env.DISABLE_ESLINT_HEAVY_RULES != null
      ? undefined
      : {
          'import/namespace': 'off',
        }
    ),
  },
}
