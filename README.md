# small-queue

An explicit FIFO queue and bounded batch-processing exercise.

Run `node test.js` from this folder.

## createQueue

A local in-memory FIFO. It provides no durability or cross-process coordination.

## chunks

Preserve input order and return a possibly shorter final chunk.

## mapBatches

Run bounded batches concurrently while preserving result order. A rejected batch stops later batches; already running work is not canceled.

## deduplicateJobs

Keep the first job for each id within one input batch. Persistent idempotency needs durable storage.
