// TODO: delete this after https://github.com/eslint-community/eslint-plugin-eslint-comments/pull/246 is merged
import type { Linter } from 'eslint'

declare namespace Configs {
  import defaultExports = Configs

  export const recommended: Linter.Config

  export { defaultExports as default }
}

export = Configs
