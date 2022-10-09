module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  testMatch: ['<rootDir>/packages/(?:.+?)/test/**/*.(test|spec).(js|ts)'],
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/dist/'],
};
