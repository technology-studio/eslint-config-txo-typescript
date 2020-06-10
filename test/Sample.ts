/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-06-02T12:11:28+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

// HELPER STRUCTURES

type Sample = Record<string, unknown>
type Generic<TYPE> = TYPE

// VALIDATION SAMPLES
export type SemiError = Record<string, unknown>;
export type SemiOk = Record<string, unknown>

// export const arrayStyleComplexTypeError: Array<Record<string, unknown>>[] = []
export const arrayStyleComplexTypeOk: Record<string, unknown>[] = []

// export const arrayStyleSimlpeTypeError: Array<Sample>[] = []
export const arrayStyleSimpleTypeOk: Sample[] = []

// export const noInferrableTypesError: boolean = true
export const noInferrableTypesOk = true

// export type DelimiterDangleAError = { foo: boolean, }
// export type DelimiterDangleBError = {
//   foo: boolean
// }
export type DelimiterDangleAOk = { foo: boolean }
export type DelimiterDangleBOk = {
  foo: boolean,
  bar: boolean,
}
// export type GenericDangleError = Generic< number >
export type GenericDangleOk = Generic<number>

// export type NoDupeKeysError = { a: number, a: number }
export type NoDupeKeysOK = { a: number, b: number }

// export type typeNamingConventionError = Record<string, unknown>
export type TypeNamingConventionOk = Record<string, unknown>

export type NoUselessComputedKeyOk = { 123: number }
export type NoUselessComputedKeyOk2 = { [123]: number }
export const noUselessComputedKeyOk = { 123: 1 }
export const noUselessComputedKeyOk2 = { [123]: 1 }

// export const multilineCommaError = {
//   a: '1',
//   b: '2'
// }
export const multilineCommaOk = {
  a: '1',
  b: '2',
}
