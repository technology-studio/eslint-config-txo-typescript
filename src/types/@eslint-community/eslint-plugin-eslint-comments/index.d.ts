// TODO: delete this after https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246 is merged
import type {
  ESLint, Linter,
} from 'eslint'

declare module '@eslint-community/eslint-plugin-eslint-comments' {
  export const configs: { recommended: Linter.Config }
  export const rules: NonNullable<ESLint.Plugin['rules']>
  export const utils: { patch: (ruleId?: string) => void }
}
