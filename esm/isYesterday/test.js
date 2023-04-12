/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isYesterday from "./index.js";
describe('isYesterday', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Aug */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date is yesterday', function () {
    var result = isYesterday(new Date(2014, 8
    /* Sep */
    , 24));
    assert(result === true);
  });
  it('returns false if the given date is not yesterday', function () {
    var result = isYesterday(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isYesterday(new Date(2014, 8
    /* Sep */
    , 24).getTime());
    assert(result === true);
  });
});