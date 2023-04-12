/* eslint-env mocha */
import assert from 'assert';
import isExists from "./index.js";
describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = isExists(2018, 0, 31);
    assert(result === true);
  });
  it('returns false if the given date is invalid', function () {
    var result = isExists(2018, 1
    /* Feb */
    , 31);
    assert(result === false);
  });
});