/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T11:14:55+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'prefer-template': 'error',
    'keyword-spacing': 'off',
    camelcase: 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 2,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
        },
      },
    ],
  },
}