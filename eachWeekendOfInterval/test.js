"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachWeekendOfInterval', function () {
  it('returns all weekends within the interval', function () {
    var result = (0, _index.default)({
      start: new Date(2018, 8
      /* Sept */
      , 17),
      end: new Date(2018, 8
      /* Sept */
      , 30)
    });

    _assert.default.deepStrictEqual(result, [new Date(2018, 8
    /* Sept */
    , 22), new Date(2018, 8
    /* Sept */
    , 23), new Date(2018, 8
    /* Sept */
    , 29), new Date(2018, 8
    /* Sept */
    , 30)]);
  });
  it('returns all weekends within the interval when starting on a weekend', function () {
    var result = (0, _index.default)({
      start: new Date(2018, 8
      /* Sept */
      , 22),
      end: new Date(2018, 8
      /* Sept */
      , 30)
    });

    _assert.default.deepStrictEqual(result, [new Date(2018, 8
    /* Sept */
    , 22), new Date(2018, 8
    /* Sept */
    , 23), new Date(2018, 8
    /* Sept */
    , 29), new Date(2018, 8
    /* Sept */
    , 30)]);
  });
  it('throws `RangeError` invalid interval start date is used', function () {
    var block = _index.default.bind(null, {
      start: new Date(NaN),
      end: new Date(2019, 11
      /* Dec */
      , 31)
    });

    _assert.default.throws(block, RangeError);
  });
  it('throws `RangeError` invalid interval end date is used', function () {
    var block = _index.default.bind(null, {
      start: new Date(2019, 0
      /* Jan */
      , 1),
      end: new Date(NaN)
    });

    _assert.default.throws(block, RangeError);
  });
  it('throws `RangeError` if start of an interval is after its end', function () {
    var block = _index.default.bind(null, {
      start: new Date(2018, 8
      /* Sept */
      , 25),
      end: new Date(2018, 8
      /* Sept */
      , 6)
    });

    _assert.default.throws(block, RangeError);
  });
});