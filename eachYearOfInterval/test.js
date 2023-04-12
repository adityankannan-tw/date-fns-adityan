"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachYearOfInterval', function () {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function () {
    var result = (0, _index.default)({
      start: new Date(2012, 9
      /* Oct */
      , 6),
      end: new Date(2017, 9
      /* Oct */
      , 12)
    });

    _assert.default.deepStrictEqual(result, [new Date(2012, 0
    /* Jan */
    , 1), new Date(2013, 0
    /* Jan */
    , 1), new Date(2014, 0
    /* Jan */
    , 1), new Date(2015, 0
    /* Jan */
    , 1), new Date(2016, 0
    /* Jan */
    , 1), new Date(2017, 0
    /* Jan */
    , 1)]);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)({
      start: new Date(2012, 9
      /* Oct */
      , 6).getTime(),
      end: new Date(2017, 9
      /* Oct */
      , 12).getTime()
    });

    _assert.default.deepStrictEqual(result, [new Date(2012, 0
    /* Jan */
    , 1), new Date(2013, 0
    /* Jan */
    , 1), new Date(2014, 0
    /* Jan */
    , 1), new Date(2015, 0
    /* Jan */
    , 1), new Date(2016, 0
    /* Jan */
    , 1), new Date(2017, 0
    /* Jan */
    , 1)]);
  });
  it('handles the dates that are not starts of days', function () {
    var result = (0, _index.default)({
      start: new Date(2012, 9
      /* Oct */
      , 6, 6, 35),
      end: new Date(2017, 9
      /* Oct */
      , 12, 22, 15)
    });

    _assert.default.deepStrictEqual(result, [new Date(2012, 0
    /* Jan */
    , 1), new Date(2013, 0
    /* Jan */
    , 1), new Date(2014, 0
    /* Jan */
    , 1), new Date(2015, 0
    /* Jan */
    , 1), new Date(2016, 0
    /* Jan */
    , 1), new Date(2017, 0
    /* Jan */
    , 1)]);
  });
  it('returns one year if the both arguments are on the same year', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6, 14),
      end: new Date(2014, 9
      /* Oct */
      , 6, 15)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1)]);
  });
  it('returns one year if the both arguments are the same', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6, 14),
      end: new Date(2014, 9
      /* Oct */
      , 6, 14)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1)]);
  });
  it('throws an exception if the start date is after the end date', function () {
    var block = _index.default.bind(null, {
      start: new Date(2014, 9
      /* Oct */
      , 12),
      end: new Date(2014, 9
      /* Oct */
      , 6)
    });

    _assert.default.throws(block, RangeError);
  });
  it('throws an exception if the start date is `Invalid Date`', function () {
    var block = _index.default.bind(null, {
      start: new Date(NaN),
      end: new Date(2014, 9
      /* Oct */
      , 6)
    });

    _assert.default.throws(block, RangeError);
  });
  it('throws an exception if the end date is `Invalid Date`', function () {
    var block = _index.default.bind(null, {
      start: new Date(2014, 9
      /* Oct */
      , 12),
      end: new Date(NaN)
    });

    _assert.default.throws(block, RangeError);
  });
});