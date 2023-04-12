/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisISOWeek from "./index.js";
describe('isSameISOWeek', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same ISO week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 22);
    assert(isThisISOWeek(date) === true);
  });
  it('returns false if the given date and the current date have different ISO weeks', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 21);
    assert(isThisISOWeek(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 29).getTime();
    assert(isThisISOWeek(date) === false);
  });
});