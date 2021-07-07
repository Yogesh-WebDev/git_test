const { expect } = require('@jest/globals');
const calculator = require('./calculator');

// eslint-disable-next-line no-undef
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('addition not possible', () => {
  expect(calculator.add(1, 'a')).toBe('1a');
});
test('capitalize of hello is equal to Hello', () => {
  expect(calculator.sub(2, 1)).toBe(1);
});
test('capitalize of hello is equal to Hello', () => {
  expect(calculator.div(2, 1)).toBe(2);
});
test('capitalize of hello is equal to Hello', () => {
  expect(calculator.mul(2, 1)).toBe(2);
});
