"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('toDate', function () {
  describe('date argument', function () {
    it('returns a clone of the given date', function () {
      var date = new Date(2016, 0, 1);
      var dateClone = (0, _index.default)(date);
      dateClone.setFullYear(2015);

      _assert.default.deepStrictEqual(date, new Date(2016, 0, 1));
    });
  });
  describe('timestamp argument', function () {
    it('creates a date from the timestamp', function () {
      var timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime();
      var result = (0, _index.default)(timestamp);

      _assert.default.deepStrictEqual(result, new Date(2016, 0, 1, 23, 30, 45, 123));
    });
  });
  describe('invalid argument', function () {
    it('returns Invalid Date if argument is NaN', function () {
      var result = (0, _index.default)(NaN);
      (0, _assert.default)(result instanceof Date);
      (0, _assert.default)(isNaN(result.getTime()));
    });
    it('returns Invalid Date if argument is Invalid Date', function () {
      var result = (0, _index.default)(new Date(NaN));
      (0, _assert.default)(result instanceof Date);
      (0, _assert.default)(isNaN(result.getTime()));
    });
  });
});