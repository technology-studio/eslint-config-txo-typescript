/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-06-02T12:11:28+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

// HELPER STRUCTURES

type Sample = {}
type Generic<TYPE> = TYPE

// VALIDATION SAMPLES

// export type SemiError = {};
export type SemiOk = {}

// export const arrayStyleComplexTypeError: Array<?{}>[] = []
export const arrayStyleComplexTypeOk: (?{})[] = []

// export const arrayStyleSimlpeTypeError: Array<Sample>[] = []
export const arrayStyleSimpleTypeOk: Sample[] = []

// export const booleanStyleError: bool = true
export const booleanStyleOk: boolean = true

// export type DelimiterDangleAError = { foo: boolean, }
// export type DelimiterDangleBError = {
//   foo: boolean,
// }
export type DelimiterDangleAError = { foo: boolean }
export type DelimiterDangleBOk = {
  foo: boolean,
  bar: boolean,
}

// export type GenericDangleError = Generic< number >
export type GenericDangleOk = Generic<number>

// export type NoDupeKeysError = { a: number, a: number }
export type NoDupeKeysOK = { a: number, b: number }

// export type typeIdMatchError = {}
export type TypeIdMatchOk = {}

export type NoUselessComputedKeyOk = { 123: number }
export type NoUselessComputedKeyOk2 = { [123]: number }
export const noUselessComputedKeyOk = { 123: 1 }
export const noUselessComputedKeyOk2 = { [123]: 1 }
