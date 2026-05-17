"use strict";

function createQueue() {
  const items = [];
  return { push: function (item) { items.push(item); }, take: function () { return items.shift(); }, size: function () { return items.length; } };
}

function chunks(values, size) {
  if (!Number.isInteger(size) || size < 1) throw new RangeError("Invalid chunk size");
  const result = [];
  for (let i = 0; i < values.length; i += size) result.push(values.slice(i, i + size));
  return result;
}

module.exports = { createQueue: createQueue, chunks: chunks };
