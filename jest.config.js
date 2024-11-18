/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-05-15T12:05:47+02:00
 * @Copyright: Technology Studio
**/

import { defaults } from 'jest-config'

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/__tests__/Tests/**/?(*.)(spec|test).ts'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!@txo).+\\.js$'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  setupFiles: [
    '<rootDir>/__tests__/Setup.ts'
  ],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: './__tests__/tsconfig.json'
    }]
  },
}
