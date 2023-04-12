/* eslint-env mocha */
import assert from 'assert';
import sinon from 'sinon';
import formatISO from "./index.js";
import { generateOffset } from "../_lib/test/index.js";
describe('formatISO', function () {
  it('formats ISO-8601 extended format', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123);
    var tzOffsetExtended = generateOffset(date);
    assert(formatISO(date) === "2019-03-03T19:00:52".concat(tzOffsetExtended));
    var getTimezoneOffsetStub = sinon.stub(Date.prototype, 'getTimezoneOffset');
    getTimezoneOffsetStub.returns(480);
    var tzNegativeOffsetExtended = generateOffset(date);
    assert(formatISO(date) === "2019-03-03T19:00:52".concat(tzNegativeOffsetExtended));
    getTimezoneOffsetStub.returns(0);
    var tzZOffsetExtended = generateOffset(date);
    assert(formatISO(date) === "2019-03-03T19:00:52".concat(tzZOffsetExtended));
    getTimezoneOffsetStub.restore();
  });
  it('accepts a timestamp', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123).getTime();
    var tzOffsetExtended = generateOffset(new Date(date));
    assert(formatISO(date) === "2019-03-03T19:00:52".concat(tzOffsetExtended));
  });
  it('formats ISO-8601 basic format', function () {
    var date = new Date(2019, 9
    /* Oct */
    , 4, 12, 30, 13, 456);
    var tzOffsetBasic = generateOffset(date);
    assert(formatISO(date, {
      format: 'basic'
    }) === "20191004T123013".concat(tzOffsetBasic));
  });
  it('formats only date', function () {
    var date = new Date(2019, 11
    /* Dec */
    , 11, 1, 0, 0, 789);
    assert(formatISO(date, {
      representation: 'date',
      format: 'extended'
    }) === '2019-12-11');
    assert(formatISO(date, {
      representation: 'date',
      format: 'basic'
    }) === '20191211');
  });
  it('formats only time', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123);
    var tzOffset = generateOffset(date);
    assert(formatISO(date, {
      representation: 'time',
      format: 'extended'
    }) === "19:00:52".concat(tzOffset));
    assert(formatISO(date, {
      representation: 'time',
      format: 'basic'
    }) === "190052".concat(tzOffset));
  });
  it('throws RangeError if the time value is invalid', function () {
    assert.throws(formatISO.bind(null, new Date(NaN)), RangeError);
  });
});