"use strict";
var assert = require("assert");
var lib = require("./index");

var queue = lib.createQueue(); queue.push(1); queue.push(2);
assert.strictEqual(queue.take(), 1); assert.strictEqual(queue.take(), 2);
assert.strictEqual(queue.take(), undefined); assert.strictEqual(queue.size(), 0);

