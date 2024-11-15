// TODO: delete this after https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246 is merged
declare module '@eslint-community/eslint-plugin-eslint-comments/configs' {
  import type {
    Linter,
  } from 'eslint'
  namespace Configs {
    import defaultExports = Configs

    export const recommended: Linter.Config

    export { defaultExports as default }
  }

  export = Configs
}
declare module '@eslint-community/eslint-plugin-eslint-comments' {
  import type {
    ESLint, Linter,
  } from 'eslint'
  export const configs: { recommended: Linter.Config }
  export const rules: NonNullable<ESLint.Plugin['rules']>
  export const utils: { patch: (ruleId?: string) => void }
}
