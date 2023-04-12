/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isPast from "./index.js";
describe('isPast', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date is in the past', function () {
    var result = isPast(new Date(2014, 6
    /* Jul */
    , 2));
    assert(result === true);
  });
  it('returns false if the given date is in the future', function () {
    var result = isPast(new Date(2014, 11
    /* Dec */
    , 31));
    assert(result === false);
  });
  it('returns false if the given date is now', function () {
    var result = isPast(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isPast(new Date(2014, 6
    /* Jul */
    , 2).getTime());
    assert(result === true);
  });
});