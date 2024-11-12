/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T12:11:28+02:00
 * @Copyright: Technology Studio
**/

// NOTE: Use name of rule for variables or types

// VALIDATION SAMPLES
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const noExplicitAnyError = (...args: any[]): any[] => args
export const noExplicitAnyOk = (...args: string[]): string[] => args

// @ts-expect-error -- should fail
export type NoDupeKeysError = { a: number, a: number }
export type NoDupeKeysOK = { a: number, b: number }

// eslint-disable-next-line no-useless-computed-key
export const noUselessComputedKeyError = { ['abc']: '1' }
export const noUselessComputedKeyOk = { abc: '1' }

export const multilineCommaError = {
  a: '1',
  // eslint-disable-next-line @stylistic/comma-dangle
  b: '2'
}
export const multilineCommaOk = {
  a: '1',
  b: '2',
}
