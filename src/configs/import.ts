/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T11:36:16+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

export const importRules: Linter.RulesRecord = {
  'import/order': ['error', {
    'newlines-between': 'always',
    'groups': [
      ['builtin', 'external'],
      'internal',
      'parent',
      'sibling',
      'index',
    ],
  }],
}
