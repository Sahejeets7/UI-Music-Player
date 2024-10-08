import type { Config } from 'jest';

const config: Config = {
    coverageDirectory: 'reports',
    reporters: ['default', 'jest-junit'],
    testTimeout: 10000,
    workerIdleMemoryLimit: '512MB',
    projects: [
        {
            testEnvironment: 'jsdom',
            testEnvironmentOptions: {
                url: 'https://origin-sso-ui.dev-godaddy.com:3000/',
            },
            displayName: 'client-side',
            setupFiles: ['./test/setup-client.js'],
            setupFilesAfterEnv: ['./test/setup-jsdom.js'],
            collectCoverageFrom: [
                '<rootDir>/src/(components|containers|pages|helpers|utils|hooks|hocs|lifecycles|theme|redux|constants)/**/*.(test|spec).(js|ts|tsx)',
            ],
            coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/test/', '<rootDir>/cypress/'],
            testMatch: [
                '<rootDir>/src/(components|containers|pages|helpers|utils|hooks|hocs|lifecycles|theme|redux|constants)/**/*.(test|spec).(js|ts|tsx)',
            ],
            transform: {
                '^.+\\.(jsx|js|ts|tsx)?$': ['babel-jest', { rootMode: 'upward' }],
                '\\.(jpeg|jpg|png)$': '<rootDir>test/__mocks__/fileTransformer.js',
            },
            moduleNameMapper: {
                '^@ux/(.*)/styles$': '<rootDir>/test/__mocks__/styleMock.js',
                '^.+\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
                '^@/test/(.*)$': '<rootDir>/test/$1',
                '^@/cypress/(.*)$': '<rootDir>/cypress/$1',
                '^@/locales/(.*)$': '<rootDir>/locales/$1',
                '^@/(.*)$': '<rootDir>/src/$1',
                '^next/router$': 'next-router-mock',
            },
        },
        {
            automock: false,
            collectCoverageFrom: ['<rootDir>/src/ajax/**/*.js'],
            displayName: 'server-side',
            setupFiles: ['./test/setup-ajax.js'],
            testMatch: ['<rootDir>/src/ajax/**/*.test.js'],
            transform: {
                '^.+\\.jsx?$': 'babel-jest',
            },
            moduleNameMapper: {
                '^.+\\.(css|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
            },
        },
    ],
};

export default config;
