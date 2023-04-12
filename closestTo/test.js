"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('closestTo', function () {
  it('returns the date from the given array closest to the given date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31), new Date(2012, 6
    /* Jul */
    , 2)]);

    _assert.default.deepStrictEqual(result, new Date(2015, 7
    /* Aug */
    , 31));
  });
  it('works if the closest date from the given array is before the given date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2, 6, 30, 4, 500);
    var result = (0, _index.default)(date, [new Date(2014, 6
    /* Jul */
    , 2, 6, 30, 5, 900), new Date(2014, 6
    /* Jul */
    , 2, 6, 30, 3, 900), new Date(2014, 6
    /* Jul */
    , 2, 6, 30, 10)]);

    _assert.default.deepStrictEqual(result, new Date(2014, 6
    /* Jul */
    , 2, 6, 30, 3, 900));
  });
  it('accepts timestamps', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31).getTime(), new Date(2012, 6
    /* Jul */
    , 2).getTime()]);

    _assert.default.deepStrictEqual(result, new Date(2015, 7
    /* Aug */
    , 31));
  });
  it('returns undefined if the given array is empty', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    var result = (0, _index.default)(date, []);

    _assert.default.deepStrictEqual(result, undefined);
  });
  it('returns `Invalid Date` if the given date is `Invalid Date`', function () {
    var date = new Date(NaN);
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31), new Date(2012, 6
    /* Jul */
    , 2)]);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if any date in the given array is `Invalid Date`', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31), new Date(NaN), new Date(2012, 6
    /* Jul */
    , 2)]);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});