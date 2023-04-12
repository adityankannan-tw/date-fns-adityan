/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isFuture from "./index.js";
describe('isFuture', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date is in the future', function () {
    var result = isFuture(new Date(2014, 9
    /* Oct */
    , 31));
    assert(result === true);
  });
  it('returns false if the given date is in the past', function () {
    var result = isFuture(new Date(2014, 8
    /* Sep */
    , 1));
    assert(result === false);
  });
  it('returns false if the given date is now', function () {
    var result = isFuture(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isFuture(new Date(2014, 9
    /* Oct */
    , 31).getTime());
    assert(result === true);
  });
});