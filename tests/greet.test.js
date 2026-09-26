const test = require("node:test");
const assert = require("node:assert/strict");
const { greet } = require("../public/script");

test('greet("Amar Khan") returns "Hello, Amar Khan!"', () => {
  const result = greet("Amar Khan");

  assert.strictEqual(result, "Hello, Amar Khan!");
});
