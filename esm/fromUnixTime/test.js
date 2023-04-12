/* eslint-env mocha */
import assert from 'assert';
import fromUnixTime from "./index.js";
describe('fromUnixTime', function () {
  it('returns the date derived from the given UNIX timestamp', function () {
    var result = fromUnixTime(1330515499);
    assert(result.getTime() === 1330515499000);
  });
  it('returns invalid if the given timestamp is invalid', function () {
    var result = fromUnixTime(NaN);
    assert(isNaN(result.getTime()));
  });
});