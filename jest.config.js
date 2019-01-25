module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {'^.+\\.(css|less)$': '<rootDir>/src/testUtils/cssMock.js'},
  setupTestFrameworkScriptFile: '<rootDir>/src/setupTests.js',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transformIgnorePatterns: ['./node_modules/'],  
  verbose: true,
}
