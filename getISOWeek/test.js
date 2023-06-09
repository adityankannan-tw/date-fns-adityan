"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getISOWeek', function () {
  it('returns the ISO week of the given date', function () {
    var result = (0, _index.default)(new Date(2005, 0
    /* Jan */
    , 2));
    (0, _assert.default)(result === 53);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2008, 11
    /* Dec */
    , 29).getTime());
    (0, _assert.default)(result === 1);
  });
  describe('edge cases', function () {
    it('returns the ISO week at 1 January 2016', function () {
      var result = (0, _index.default)(new Date(2016, 0
      /* Jan */
      , 1));
      (0, _assert.default)(result === 53);
    });
    it('returns the ISO week at 1 May 2016', function () {
      var result = (0, _index.default)(new Date(2016, 4
      /* May */
      , 1));
      (0, _assert.default)(result === 17);
    });
    it('returns the ISO week at 2 May 2016', function () {
      var result = (0, _index.default)(new Date(2016, 4
      /* May */
      , 2));
      (0, _assert.default)(result === 18);
    });
    it('returns the ISO week at 31 May 2016', function () {
      var result = (0, _index.default)(new Date(2016, 4
      /* May */
      , 31));
      (0, _assert.default)(result === 22);
    });
  });
  it('handles dates before 100 AD', function () {
    var initialDate = new Date(0);
    initialDate.setFullYear(7, 11
    /* Dec */
    , 30);
    initialDate.setHours(0, 0, 0, 0);
    var result = (0, _index.default)(initialDate);
    (0, _assert.default)(result === 52);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});