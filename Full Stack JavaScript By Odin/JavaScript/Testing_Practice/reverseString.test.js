const { expect } = require('@jest/globals');
const reverseString = require('./reverseString');

// eslint-disable-next-line no-undef
test('capitalize of hello is equal to olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});
