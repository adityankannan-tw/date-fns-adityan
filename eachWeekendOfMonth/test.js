"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachWeekendOfMonth', function () {
  it('returns all weekends of the given month', function () {
    var result = (0, _index.default)(new Date(2022, 1, 20));

    _assert.default.deepStrictEqual(result, [new Date(2022, 1, 5), new Date(2022, 1, 6), new Date(2022, 1, 12), new Date(2022, 1, 13), new Date(2022, 1, 19), new Date(2022, 1, 20), new Date(2022, 1, 26), new Date(2022, 1, 27)]);
  });
  it('throws RangeError when the expected year is an Invalid Date', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});