const { expect } = require('@jest/globals');
const capitalize = require('./capitalize');

// eslint-disable-next-line no-undef
test('capitalize of hello is equal to Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});
