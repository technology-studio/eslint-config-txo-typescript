- Rule '@typescript-eslint/semi': 'off' does not work (semicolon still allowed)
export type SemiError = Record<string, unknown>;
export type SemiOk = Record<string, unknown>
- No rule found for
// export type GenericDangleError = Generic< number >
export type GenericDangleOk = Generic<number>