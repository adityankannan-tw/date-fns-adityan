/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisYear from "./index.js";
describe('isThisYear', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same year', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    assert(isThisYear(date) === true);
  });
  it('returns false if the given date and the current date have different years', function () {
    var date = new Date(2015, 6
    /* Jul */
    , 2);
    assert(isThisYear(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    assert(isThisYear(date) === true);
  });
});