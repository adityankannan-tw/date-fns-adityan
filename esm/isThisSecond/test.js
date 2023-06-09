/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisSecond from "./index.js";
describe('isThisSecond', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 15, 500).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same second', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 15);
    assert(isThisSecond(date) === true);
  });
  it('returns false if the given date and the current date have different seconds', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 16);
    assert(isThisSecond(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 15, 250).getTime();
    assert(isThisSecond(date) === true);
  });
});