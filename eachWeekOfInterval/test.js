"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachWeekOfInterval', function () {
  it('returns an array with starts of weeks from the week of the start date to the week of the end date', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6),
      end: new Date(2014, 10
      /* Nov */
      , 23)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 5), new Date(2014, 9
    /* Oct */
    , 12), new Date(2014, 9
    /* Oct */
    , 19), new Date(2014, 9
    /* Oct */
    , 26), new Date(2014, 10
    /* Nov */
    , 2), new Date(2014, 10
    /* Nov */
    , 9), new Date(2014, 10
    /* Nov */
    , 16), new Date(2014, 10
    /* Nov */
    , 23)]);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6).getTime(),
      end: new Date(2014, 10
      /* Nov */
      , 23).getTime()
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 5), new Date(2014, 9
    /* Oct */
    , 12), new Date(2014, 9
    /* Oct */
    , 19), new Date(2014, 9
    /* Oct */
    , 26), new Date(2014, 10
    /* Nov */
    , 2), new Date(2014, 10
    /* Nov */
    , 9), new Date(2014, 10
    /* Nov */
    , 16), new Date(2014, 10
    /* Nov */
    , 23)]);
  });
  it('handles the dates that are not starts/ends of days and weeks', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6, 6, 35),
      end: new Date(2014, 10
      /* Nov */
      , 25, 22, 16)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 5), new Date(2014, 9
    /* Oct */
    , 12), new Date(2014, 9
    /* Oct */
    , 19), new Date(2014, 9
    /* Oct */
    , 26), new Date(2014, 10
    /* Nov */
    , 2), new Date(2014, 10
    /* Nov */
    , 9), new Date(2014, 10
    /* Nov */
    , 16), new Date(2014, 10
    /* Nov */
    , 23)]);
  });
  it('considers the weekStartsOn option', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6, 6, 35),
      end: new Date(2014, 10
      /* Nov */
      , 25, 22, 15)
    }, {
      weekStartsOn: 2
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 8
    /* Sep */
    , 30), new Date(2014, 9
    /* Oct */
    , 7), new Date(2014, 9
    /* Oct */
    , 14), new Date(2014, 9
    /* Oct */
    , 21), new Date(2014, 9
    /* Oct */
    , 28), new Date(2014, 10
    /* Nov */
    , 4), new Date(2014, 10
    /* Nov */
    , 11), new Date(2014, 10
    /* Nov */
    , 18), new Date(2014, 10
    /* Nov */
    , 25)]);
  });
  it('returns one week if the both arguments are on the same week', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6, 14),
      end: new Date(2014, 9
      /* Oct */
      , 8, 15)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 5)]);
  });
  it('returns one day if the both arguments are the same', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 9
      /* Oct */
      , 6, 14),
      end: new Date(2014, 9
      /* Oct */
      , 6, 14)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 9
    /* Oct */
    , 5)]);
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