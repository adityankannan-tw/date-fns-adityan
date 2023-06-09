/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isThisQuarter from "./index.js";
describe('isThisQuarter', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    assert(isThisQuarter(date) === true);
  });
  it('returns false if the given date and the current date have different quarters', function () {
    var date = new Date(2014, 1
    /* Feb */
    , 11);
    assert(isThisQuarter(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    assert(isThisQuarter(date) === true);
  });
});