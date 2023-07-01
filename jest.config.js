/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {},
    setupFilesAfterEnv: [
        '<rootDir>/jest-setup.ts'
    ]
};
