const { expect } = require('@jest/globals');
const arrayAnalysis = require('./arrayAnalysis');

// eslint-disable-next-line no-undef
test('test 1 passed', () => {
  expect(arrayAnalysis([1, 2, 5, 4, 5, 6])).toEqual({
    average: 3.5,
    minimum: 1,
    maximum: 6,
    lengthofArray: 6,
  });
});
