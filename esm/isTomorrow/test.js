/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import isTomorrow from "./index.js";
describe('isTomorrow', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers(new Date(2014, 8
    /* Aug */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date is tomorrow', function () {
    var result = isTomorrow(new Date(2014, 8
    /* Sep */
    , 26));
    assert(result === true);
  });
  it('returns false if the given date is not tomorrow', function () {
    var result = isTomorrow(new Date(2014, 8
    /* Sep */
    , 25));
    assert(result === false);
  });
  it('accepts a timestamp', function () {
    var result = isTomorrow(new Date(2014, 8
    /* Sep */
    , 26).getTime());
    assert(result === true);
  });
});