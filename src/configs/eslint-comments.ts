/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-01-22T20:01:74+01:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

export const eslintCommentsRules: Linter.RulesRecord = {
  '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
}
