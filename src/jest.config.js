module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      "type": "module"
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };