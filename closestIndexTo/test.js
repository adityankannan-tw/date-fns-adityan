"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('closestIndexTo', function () {
  it('returns the date index from the given array closest to the given date', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31), new Date(2012, 6
    /* Jul */
    , 2)]);

    _assert.default.strictEqual(result, 0);
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

    _assert.default.strictEqual(result, 1);
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

    _assert.default.strictEqual(result, 0);
  });
  it('returns undefined if the given array is empty', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    var result = (0, _index.default)(date, []);

    _assert.default.strictEqual(result, undefined);
  });
  it('returns NaN if the given date is `Invalid Date`', function () {
    var date = new Date(NaN);
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31), new Date(2012, 6
    /* Jul */
    , 2)]);
    (0, _assert.default)(result != null && isNaN(result));
  });
  it('returns NaN if any date in the given array is `Invalid Date`', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    var result = (0, _index.default)(date, [new Date(2015, 7
    /* Aug */
    , 31), new Date(NaN), new Date(2012, 6
    /* Jul */
    , 2)]);
    (0, _assert.default)(result != null && isNaN(result));
  });
});