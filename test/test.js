const { goodLuck } = require('../src/index');

test('a failing test', () => {
  expect(goodLuck()).toBe(true);
});
