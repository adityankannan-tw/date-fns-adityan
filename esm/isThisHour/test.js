/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisHour from "./index.js";
describe('isThisHour', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 15, 500).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same hour', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18);
    assert(isThisHour(date) === true);
  });
  it('returns false if the given date and the current date have different hours', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 19);
    assert(isThisHour(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 45).getTime();
    assert(isThisHour(date) === true);
  });
});