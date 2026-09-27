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

async function mapBatches(values, size, operation) {
  const result = [];
  for (const batch of chunks(values, size)) result.push(...await Promise.all(batch.map(operation)));
  return result;
}

function deduplicateJobs(jobs) {
  const seen = new Set();
  return jobs.filter(function (job) { if (seen.has(job.id)) return false; seen.add(job.id); return true; });
}

module.exports = { createQueue: createQueue, chunks: chunks, mapBatches: mapBatches, deduplicateJobs: deduplicateJobs };
