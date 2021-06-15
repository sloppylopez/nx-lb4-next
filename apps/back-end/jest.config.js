module.exports = {
  displayName: 'back-end',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/back-end',
  testPathIgnorePatterns: ['/node_modules/', 'test-helper.js'],
  testMatch: ['<rootDir>/src/__tests__/acceptance/*.acceptance.ts'],
};
