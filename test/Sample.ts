/**
 * @Author: Rostislav Simonik <rostislav.simonik>
 * @Date:   2018-06-02T12:11:28+02:00
 * @Email:  rostislav.simonik@technologystudio.sk
 * @Copyright: Technology Studio
 * @flow
 */

'use strict'; // eslint-disable-line

// NOTE: Use name of rule for variables or types

// HELPER STRUCTURES

type Sample = Record<string, unknown>
type Generic<TYPE> = TYPE

// VALIDATION SAMPLES
// export type SemiError = Record<string, unknown>;
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
// export const noUselessComputedKeyError = { [123]: 1 }
export const noUselessComputedKeyOk = { 123: 1 }

// export interface ConsistentTypeDefinitionsError { a: boolean }
export type ConsistentTypeDefinitionsOk = { a: boolean }

// export const multilineCommaError = {
//   a: '1',
//   b: '2'
// }
export const multilineCommaOk = {
  a: '1',
  b: '2',
}

export const noReturnAwaitOk = async (): Promise<string> => {
  return Promise.resolve('try')
}

// export const noReturnAwaitError = async (): Promise<void> => {
//   return await new Promise(resolve => setTimeout(resolve, 100))
// }

export const returnAwaitInTryCatchOk = async (): Promise<string> => {
  try {
    return await Promise.resolve('try')
  } catch (e) {
    return 'error'
  }
}

// export const returnAwaitInTryCatchError = async (): Promise<string> => {
//   try {
//     return Promise.resolve('try')
//   } catch (e) {
//     return 'error'
//   }
// }

// TODO: fix wrong name, it's not clear what rule is tested.
export const allowNullableObjectOk = ((Math.random() > 0.5) ? 'a' : false) ? 'ok' : 'Error'
