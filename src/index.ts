/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'standard-with-typescript',
        'plugin:jest/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        ...[
          './configs/typescript',
          './configs/standard',
          './configs/import',
          './configs/eslint-comments',
        ].map(relativePath => require.resolve(relativePath)),
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
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: [
        'standard',
        'plugin:jest/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        ...[
          './configs/standard',
          './configs/import',
          './configs/eslint-comments',
        ].map(relativePath => require.resolve(relativePath)),
      ],
      rules: {
        strict: 'error',
      },
    },
  ],
}
