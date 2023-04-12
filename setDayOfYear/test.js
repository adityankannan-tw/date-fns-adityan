"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2), 2);

    _assert.default.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 2));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2).getTime(), 60);

    _assert.default.deepStrictEqual(result, new Date(2014, 2
    /* Mar */
    , 1));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    (0, _index.default)(date, 365);

    _assert.default.deepStrictEqual(date, new Date(2014, 6
    /* Jul */
    , 2));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 2);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});