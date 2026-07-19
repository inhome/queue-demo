"use strict";
var assert = require("assert");
var lib = require("./index");

var queue = lib.createQueue(); queue.push(1); queue.push(2);
assert.strictEqual(queue.take(), 1); assert.strictEqual(queue.take(), 2);
assert.strictEqual(queue.take(), undefined); assert.strictEqual(queue.size(), 0);

assert.deepStrictEqual(lib.chunks([1, 2, 3], 2), [[1, 2], [3]]);
assert.throws(function () { lib.chunks([], 0); }, RangeError);

async function checkBatches() {
  var active = 0, maximum = 0;
  var results = await lib.mapBatches([1, 2, 3], 2, async function (value) { active++; maximum = Math.max(maximum, active); await Promise.resolve(); active--; return value * 2; });
  assert.deepStrictEqual(results, [2, 4, 6]); assert.strictEqual(maximum, 2);
}
checkBatches().catch(function (error) { console.error(error); process.exitCode = 1; });

