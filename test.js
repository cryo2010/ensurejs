const test = require('tape');
const ensure = require('./index');

test('ensure(x).isTrue() should not throw if true', function(t) {
  t.plan(1);
  t.doesNotThrow(() => ensure(true).isTrue() );
});

test('ensure(x).isTrue() should throw if false', function(t) {
  t.plan(1);
  t.throws(() => ensure(false).isTrue());
})

test('ensure(x).isFalse() should not throw if false', function(t) {
  t.plan(1);
  t.doesNotThrow(() => ensure(false).isFalse());
});

test('ensure(x).isFalse() should throw if true', function(t) {
  t.plan(1);
  t.throws(() =>ensure(true).isFalse());
});

test('ensure(x).isNull() should not throw if null', function(t) {
  t.plan(1);
  t.doesNotThrow(() => ensure(null).isNull());
});

test('ensure(x).isNull() should not throw if undefined', function(t) {
  t.plan(1);
  let x;
  t.doesNotThrow(() => ensure(x).isNull());
});

test('ensure(x).isNotNull() should not throw if not null', function(t) {
  t.plan(1);
  t.doesNotThrow(() => ensure(new Object()).isNotNull());
});

test('ensure(x).isNotNull() should throw if null', function(t) {
  t.plan(1);
  t.throws(() => ensure(null).isNotNull());
});

test('ensure(x).isNotNull() should throw if undefined', function(t) {
  t.plan(1);
  let x;
  t.throws(() => ensure(x).isNotNull());
});

test('ensure(x).isEqualTo(y) should not throw if equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x;
  t.doesNotThrow(() => ensure(x).isEqualTo(y));
});

test('ensure(x).isEqualTo(y) should throw if not equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x + 1;
  t.throws(() => ensure(x).isEqualTo(y));
});

test('ensure(x).isNotEqualTo(y) should throw if not equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x + 1;
  t.doesNotThrow(() => ensure(x).isNotEqualTo(y));
});

test('ensure(x).isNotEqualTo(y) should throw if equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x;
  t.throws(() => ensure(x).isNotEqualTo(y));
});

test('ensure(x).isGreaterThan(y) should not throw if greater', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x - 1;
  t.doesNotThrow(() => ensure(x).isGreaterThan(y));
});

test('ensure(x).isGreaterThan(y) should throw if equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x;
  t.throws(() => ensure(x).isGreaterThan(y));
});

test('ensure(x).isGreaterThan(y) should throw if lesser', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x + 1;
  t.throws(() => ensure(x).isGreaterThan(y));
});

test('ensure(x).isGreaterEqualTo(y) should not throw if greater', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x - 1;
  t.doesNotThrow(() => ensure(x).isGreaterEqualTo(y));
});

test('ensure(x).isGreaterEqualTo(y) should not throw if equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x;
  t.doesNotThrow(() => ensure(x).isGreaterEqualTo(y));
});

test('ensure(x).isGreaterEqualTo(y) should throw if lesser', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x + 1;
  t.throws(() => ensure(x).isGreaterEqualTo(y));
});

test('ensure(x).isLessThan(y) should not throw if lesser', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x + 1;
  t.doesNotThrow(() => ensure(x).isLessThan(y));
});

test('ensure(x).isLessThan(y) should throw if equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x;
  t.throws(() => ensure(x).islessThan(y));
});

test('ensure(x).isLesserEqualTo(y) should not throw if less than', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x + 1;
  t.doesNotThrow(() => ensure(x).isLesserEqualTo(y));
});

test('ensure(x).isLesserEqualTo(y) should not throw if equal', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x;
  t.doesNotThrow(() => ensure(x).isLesserEqualTo(y));
});

test('ensure(x).isLesserEqualTo(y) should throw if greater', function(t) {
  t.plan(1);
  const x = 1234;
  const y = x - 1;
  t.throws(() => ensure(x).isLesserEqualTo(y));
});

test('ensure(x).isTypeOf(y) should not throw if typeof', function(t) {
  t.plan(1);
  const x = "test";
  t.doesNotThrow(() => ensure(x).isTypeOf('string'));
});

test('ensure(x).contains(y) should not throw if contains', function(t) {
  t.plan(1);
  const x = new Array(1,2);
  const y = 3;
  x.push(y);
  t.doesNotThrow(() => ensure(x).contains(2));
});

test('ensure(x).contains(y) should throw if does not contain', function(t) {
  t.plan(1);
  const x = new Array(1,2);
  const y = 3;
  t.throws(() => ensure(x).contains(y));
});

