/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisMonth from "./index.js";
describe('isThisMonth', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same month (and year)', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 15);
    assert(isThisMonth(date) === true);
  });
  it('returns false if the given date and the current date have different months', function () {
    var date = new Date(2013, 7
    /* Aug */
    , 31);
    assert(isThisMonth(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 30).getTime();
    assert(isThisMonth(date) === true);
  });
});