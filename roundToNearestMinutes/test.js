"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('roundToNearestMinutes', function () {
  it('rounds given date to the nearest minute by default', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 16, 16));

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 16, 0));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 13, 16).getTime());

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 13, 0));
  });
  it('rounds to the closest x minutes if nearestTo is provided', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30), {
      nearestTo: 4
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 12, 0));
  });
  it('rounds up >=30 seconds for nearestTo=1', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 13, 30));

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 14, 0));
  });
  it('rounds down <30 seconds for nearestTo=1', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 13, 29, 999));

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 13, 0));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 10, 99);
    (0, _index.default)(date);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 10, 99));
  });
  it('rounds according to the passed mode - floor', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30, 5), {
      roundingMethod: 'floor'
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 11, 0));
  });
  it('rounds according to the passed mode - floor - when nearestTo is provided', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30, 5), {
      nearestTo: 10,
      roundingMethod: 'floor'
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 0));
  });
  it('rounds according to the passed mode - ceil', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30, 5), {
      roundingMethod: 'ceil'
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 12, 0));
  });
  it('rounds according to the passed mode - ceil - when nearestTo is provided', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30, 5), {
      nearestTo: 10,
      roundingMethod: 'ceil'
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 20, 0));
  });
  it('rounds according to the passed mode - round - when nearestTo is provided', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30, 5), {
      nearestTo: 10,
      roundingMethod: 'round'
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 0));
  });
  it('rounds according to the passed mode - trunc - when nearestTo is provided', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30, 5), {
      nearestTo: 10,
      roundingMethod: 'trunc'
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 0));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('throws `RangeError` if nearestTo is not between 1 and 30', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 10, 12, 10, 30);

    _assert.default.throws(_index.default.bind(null, date, {
      nearestTo: 31
    }), RangeError);

    _assert.default.throws(_index.default.bind(null, date, {
      nearestTo: 0
    }), RangeError);
  });
});