# small-queue

An explicit FIFO queue and bounded batch-processing exercise.

Run `node test.js` from this folder.

## createQueue

A local in-memory FIFO. It provides no durability or cross-process coordination.

## chunks

Preserve input order and return a possibly shorter final chunk.
