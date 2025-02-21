/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

const assert = require('assert');

test('assert', () => {
  assert(false);
});

test('assert with a message', () => {
  assert(false, 'this is a message');
});

test('assert.ok', () => {
  assert.ok(false);
});

test('assert.ok with a message', () => {
  assert.ok(false, 'this is a message');
});

test('assert.equal', () => {
  assert.equal(1, 2);
});

test('assert.notEqual', () => {
  assert.notEqual(1, 1);
});

test('assert.deepEqual', () => {
  assert.deepEqual({a: {b: {c: 5}}}, {a: {b: {c: 6}}});
});

test('assert.deepEqual with a message', () => {
  assert.deepEqual({a: {b: {c: 5}}}, {a: {b: {c: 7}}}, 'this is a message');
});

test('assert.notDeepEqual', () => {
  assert.notDeepEqual({a: 1}, {a: 1});
});

test('assert.strictEqual', () => {
  assert.strictEqual(1, NaN);
});

test('assert.notStrictEqual', () => {
  assert.notStrictEqual(1, 1, 'My custom error message');
});

test('assert.deepStrictEqual', () => {
  assert.deepStrictEqual({a: 1}, {a: 2});
});

test('assert.notDeepStrictEqual', () => {
  assert.notDeepStrictEqual({a: 1}, {a: 1});
});

test('assert.ifError', () => {
  assert.ifError(1);
});

test('assert.doesNotThrow', () => {
  assert.doesNotThrow(() => {
    throw new Error('err!');
  });
});

test('assert.throws', () => {
  assert.throws(() => {});
});

test('assert.throws with different error messages', () => {
  assert.throws(
    () => {
      throw new Error('message 1');
    },
    {
      message: 'message 2',
    },
  );
});

test('assert.throws with different error types', () => {
  assert.throws(() => {
    throw new SyntaxError('message 1');
  }, TypeError);
});

test('async', async () => {
  assert.equal('hello\ngoodbye', 'hello', 'hmmm');
});

test('assert.fail', () => {
  assert.fail();
});

test('assert.fail with a message', () => {
  assert.fail('error!');
});
