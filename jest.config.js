/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: [
    "./lib/__tests__/index.test.d.ts"
  ],
  setupFilesAfterEnv: [
    './jest.setup.js'
  ]
};