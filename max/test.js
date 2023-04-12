"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('max', function () {
  var isInvalidDate = function isInvalidDate(date) {
    return date instanceof Date && isNaN(date.getTime());
  };

  it('returns the latest date', function () {
    var result = (0, _index.default)([new Date(1989, 6
    /* Jul */
    , 10), new Date(1987, 1
    /* Feb */
    , 11)]);

    _assert.default.deepStrictEqual(result, new Date(1989, 6
    /* Jul */
    , 10));
  });
  it('accepts array with more than 2 entries', function () {
    var result = (0, _index.default)([new Date(1987, 1
    /* Feb */
    , 11), new Date(1989, 6
    /* Jul */
    , 10), new Date(1995, 6
    /* Jul */
    , 2), new Date(1990, 0
    /* Jan */
    , 1)]);

    _assert.default.deepStrictEqual(result, new Date(1995, 6
    /* Jul */
    , 2));
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)([new Date(1989, 6
    /* Jul */
    , 10).getTime(), new Date(1987, 1
    /* Feb */
    , 11).getTime()]);

    _assert.default.deepStrictEqual(result, new Date(1989, 6
    /* Jul */
    , 10));
  });
  it('returns `Invalid Date` if any given date is invalid', function () {
    var result = (0, _index.default)([new Date(1989, 6
    /* Jul */
    , 10), new Date(NaN), new Date(1987, 1
    /* Feb */
    , 11)]);
    (0, _assert.default)(isInvalidDate(result));
  });
  it('returns `Invalid Date` for empty array', function () {
    var result = (0, _index.default)([]);
    (0, _assert.default)(isInvalidDate(result));
  });
});