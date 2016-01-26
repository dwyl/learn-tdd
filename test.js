/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var getChange = require('./change.js'); // load our getChange method
}

test('getChange should return some change', function(assert) {
    var actual = getChange(100,200);
    assert.deepEqual(actual, [100]);
});

test('getChange should return multiple coins', function(assert) {
    var actual = getChange(150,300);
    assert.deepEqual(actual, [100,50]);
});

test('getChange should return same coin twice', function(assert) {
    var actual = getChange(10, 50);
    assert.deepEqual(actual, [20, 20]);
});

test('getChange should return ', function(assert) {
    var actual = getChange(9, 562);
    assert.deepEqual(actual, [500, 50,2,1]);
});

test('getChange should return ', function(assert) {
    var actual = getChange(486, 600);
    assert.deepEqual(actual, [100, 10,2,2]);
});

test('getChange should return ', function(assert) {
    var actual = getChange(100, 6300);
    assert.deepEqual(actual, [2000, 2000,2000,200]);
});

test('getChange should return ', function(assert) {
    var actual = getChange(1000, 1337);
    assert.deepEqual(actual, [200,100,20,10,5,2]);
});
