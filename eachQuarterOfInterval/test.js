"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachQuarterOfInterval', function () {
  it('returns an array with starts of quarters from the quarter of the start date to the quarter of the end date', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 2
      /* Mar */
      , 6),
      end: new Date(2014, 7
      /* Aug */
      , 12)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1), new Date(2014, 3
    /* Apr */
    , 1), new Date(2014, 6
    /* Jul */
    , 1)]);
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 2
      /* Mar */
      , 6).getTime(),
      end: new Date(2014, 7
      /* Aug */
      , 12).getTime()
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1), new Date(2014, 3
    /* Apr */
    , 1), new Date(2014, 6
    /* Jul */
    , 1)]);
  });
  it('handles the dates that are not starts of days', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 2
      /* Mar */
      , 6, 6, 35),
      end: new Date(2014, 7
      /* Aug */
      , 12, 22, 15)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1), new Date(2014, 3
    /* Apr */
    , 1), new Date(2014, 6
    /* Jul */
    , 1)]);
  });
  it('handles the dates that are not containing days', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 2
      /* Mar */
      ),
      end: new Date(2014, 7
      /* Oct */
      )
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1), new Date(2014, 3
    /* Apr */
    , 1), new Date(2014, 6
    /* Jul */
    , 1)]);
  });
  it('returns one quarter if the both arguments are on the same quarter', function () {
    var result = (0, _index.default)({
      start: new Date(2014, 0
      /* Jan */
      , 6, 14),
      end: new Date(2014, 2
      /* Feb */
      , 9, 15)
    });

    _assert.default.deepStrictEqual(result, [new Date(2014, 0
    /* Jan */
    , 1)]);
  });
  it('returns one quarter if the both arguments are the same', function () {
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