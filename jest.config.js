module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/path/to/dir/',
    ],
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['<rootDir>', 'node_modules'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    coverageReporters: ['text'],
};
