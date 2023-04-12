/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisWeek from "./index.js";
describe('isThisWeek', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 21);
    assert(isThisWeek(date) === true);
  });
  it('returns false if the given date and the current date have different weeks', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 29);
    assert(isThisWeek(date) === false);
  });
  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 28);
    assert(isThisWeek(date, {
      weekStartsOn: 1
    }) === true);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 21).getTime();
    assert(isThisWeek(date) === true);
  });
});