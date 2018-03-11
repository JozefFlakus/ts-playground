module.exports = {
  transform: {
    '^.+\\.ts?$': './node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$',
  moduleFileExtensions: [
    'ts',
    'js',
    'json'
  ]
};
