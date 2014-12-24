/*global describe, it */
'use strict';
var assert = require('assert');
var memoize = require('../');

describe('cache-memoize node module', function () {
  it('must cache result of a function', function () {
    var memoizedRandom = memoize(function() { return Math.floor(Math.random()*100);}, 2);
    assert.equal(memoizedRandom(), memoizedRandom(), "Multiple calls yield same result");
  });
  
  it('must be cache keyed based on arguments of a function', function () {
    var memoizedRandom = memoize(function(arg) { return Math.floor(Math.random()*arg);}, 2);
    assert.equal(memoizedRandom(10), memoizedRandom(10), "Multiple calls yield same result");
    assert.notEqual(memoizedRandom(11), memoizedRandom(10), "Multiple calls yield same result");
  });

  it('must be cache keyed based on arguments of a function', function () {
    var memoizedRandom = memoize(function(arg) { return Math.floor(Math.random()*arg);}, 2);
    assert.equal(memoizedRandom(10), memoizedRandom(10), "Multiple calls yield same result");
    assert.notEqual(memoizedRandom(11), memoizedRandom(10), "Multiple calls yield same result");
  });

  // it('must be cached for duration of ttl', function () {
//     var memoizedRandom = memoize(function(arg) { return Math.floor(Math.random()*arg);}, 4);
//     assert.equal(memoizedRandom(10), memoizedRandom(10), "Multiple calls yield same result for the duration of ttl");
//     var memoizedRandomBefore = memoizedRandom(10);
//     console.log(memoizedRandomBefore);
//     setTimeout(function() {
//         console.log(memoizedRandom(10));
//         assert.equal(memoizedRandomBefore, memoizedRandom(10), "Random changes after the duration of ttl");
//         done();
//       }, 4000);
//   });
    it('must be cached for duration of ttl', function () {
    });
});
