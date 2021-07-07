const { expect } = require('@jest/globals');
const caesarCipher = require('./caesarCipher');

// eslint-disable-next-line no-undef
// test('encoding done successfully', () => {
//   expect(caesarCipher.cephering('hello#', 1)).toEqual('ifmmp$');
// });
// test('decoding done successfully', () => {
//   expect(caesarCipher.deciphering('ifmmp$', 1)).toEqual('hello#');
// });
test('encoding done successfully', () => {
  expect(caesarCipher.cephering('hello', 1)).toEqual('ifmmp');
});
test('decoding done successfully', () => {
  expect(caesarCipher.deciphering('ifmmp', 1)).toEqual('hello');
});
test('encoding done successfully', () => {
  expect(caesarCipher.cephering('yogesh', 0)).toEqual('yogesh');
});
test('decoding done successfully', () => {
  expect(caesarCipher.deciphering('yogesh', 0)).toEqual('yogesh');
});
test('encoding done successfully', () => {
  expect(caesarCipher.cephering('hello', -1)).toEqual('gdkkn');
});
test('decoding done successfully', () => {
  expect(caesarCipher.deciphering('gdkkn', -1)).toEqual('hello');
});
