/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^api/(.*)$': '<rootDir>/src/pages/api/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  testMatch: [
    "<rootDir>/src/**/__tests__/*.test.ts"
  ]
};

