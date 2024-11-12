import type {
  ESLint, Linter,
} from 'eslint'

declare module 'eslint-plugin-import' {
  export const flatConfigs: {
    recommended: Linter.Config
    typescript: Linter.Config
  }
  export const rules: NonNullable<ESLint.Plugin['rules']>
}
