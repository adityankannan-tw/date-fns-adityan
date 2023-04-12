"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setISODay', function () {
  it('sets the day of the ISO week', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 3);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 3));
  });
  it('sets the day to Sunday of this ISO week if the index is 7', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 7);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 7));
  });
  describe('the day index is more than 7', function () {
    it('sets the day of the next ISO week', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), 8);

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 8));
    });
    it('sets the day of another ISO week in the future', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), 21);

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 21));
    });
  });
  describe('the day index is less than 1', function () {
    it('sets the day of the last ISO week', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), 0);

      _assert.default.deepStrictEqual(result, new Date(2014, 7
      /* Aug */
      , 31));
    });
    it('set the day of another ISO week in the past', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), -13);

      _assert.default.deepStrictEqual(result, new Date(2014, 7
      /* Aug */
      , 18));
    });
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 3);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 3));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    (0, _index.default)(date, 3);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 3);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});