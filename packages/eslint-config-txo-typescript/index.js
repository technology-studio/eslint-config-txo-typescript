/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:jest/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    ...[
      './configs/typescript',
      './configs/standard',
      './configs/style',
      './configs/eslint',
    ].map(require.resolve),
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    strict: 'error',
  },
}
