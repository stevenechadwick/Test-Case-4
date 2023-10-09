module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src/lambdas/'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
