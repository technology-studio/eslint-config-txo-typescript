declare module 'eslint-plugin-import' {
  import type {
    ESLint, Linter,
  } from 'eslint'
  export const flatConfigs: {
    recommended: Linter.Config
    typescript: Linter.Config
  }
  export const rules: NonNullable<ESLint.Plugin['rules']>
}

declare module 'eslint-plugin-import/config/flat/recommended' {
  import type {
    Linter,
  } from 'eslint'
  const config: Linter.Config
  export default config
}
