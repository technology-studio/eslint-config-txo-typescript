/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-06-02T12:11:28+02:00
 * @Copyright: Technology Studio
**/

// NOTE: Use name of rule for variables or types

// HELPER STRUCTURES

type Sample = Record<string, unknown>

// VALIDATION SAMPLES
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const noExplicitAnyError = (...args: any[]): any[] => args
export const noExplicitAnyOk = (...args: string[]): string[] => args

// eslint-disable-next-line @stylistic/semi
export type SemiError = Record<string, unknown>;
export type SemiOk = Record<string, unknown>

// eslint-disable-next-line @typescript-eslint/array-type
export const arrayStyleComplexTypeError: Array<Record<string, unknown>>[] = []
export const arrayStyleComplexTypeOk: Record<string, unknown>[] = []

// eslint-disable-next-line @typescript-eslint/array-type
export const arrayStyleSimlpeTypeError: Array<Sample>[] = []
export const arrayStyleSimpleTypeOk: Sample[] = []

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const noInferrableTypesError: boolean = true
export const noInferrableTypesOk = true

// eslint-disable-next-line @stylistic/member-delimiter-style
export type DelimiterDangleAError = { foo: boolean, }
export type DelimiterDangleBError = {
  // eslint-disable-next-line @stylistic/member-delimiter-style
  foo: boolean
}
export type DelimiterDangleAOk = { foo: boolean }
export type DelimiterDangleBOk = {
  foo: boolean,
  bar: boolean,
}

// @ts-expect-error -- should fail
export type NoDupeKeysError = { a: number, a: number }
export type NoDupeKeysOK = { a: number, b: number }

// eslint-disable-next-line @typescript-eslint/naming-convention
export type typeNamingConventionError = Record<string, unknown>
export type TypeNamingConventionOk = Record<string, unknown>

export type NoUselessComputedKeyOk = { 123: number }
export type NoUselessComputedKeyOk2 = { [123]: number }
// eslint-disable-next-line no-useless-computed-key
export const noUselessComputedKeyError = { [123]: 1 }
export const noUselessComputedKeyOk = { 123: 1 }

export interface ConsistentTypeDefinitionsError { a: boolean }
export type ConsistentTypeDefinitionsOk = { a: boolean }

export const multilineCommaError = {
  a: '1',
  // eslint-disable-next-line @stylistic/comma-dangle
  b: '2'
}
export const multilineCommaOk = {
  a: '1',
  b: '2',
}

export const noReturnAwaitOk = async (): Promise<void> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 100)
  })
}

// eslint-disable-next-line @typescript-eslint/return-await
export const noReturnAwaitError = async (): Promise<string> => Promise.resolve('try')

export const returnAwaitInTryCatchOk = async (): Promise<string> => {
  try {
    return await Promise.resolve('try')
  } catch (e) {
    return 'error'
  }
}

export const returnAwaitInTryCatchError = async (): Promise<string> => {
  try {
    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.resolve('try')
  } catch (e) {
    return 'error'
  }
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- we need a literal value to test
export const strictBooleanExpressionsOk = ((Math.random() > 0.5) ? 'a' != null : false) ? 'ok' : 'Error'
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
export const strictBooleanExpressionsError = ((Math.random() > 0.5) ? 'a' : false) ? 'ok' : 'Error'

export const returnValueImmediatelyOk = (): string => 'value'

// eslint-disable-next-line arrow-body-style
export const returnValueImmediatelyError = (): string => {
  return 'value'
}
