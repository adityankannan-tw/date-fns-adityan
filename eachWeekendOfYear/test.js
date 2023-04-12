"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = _interopRequireDefault(require("../isWeekend/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('eachWeekendOfYear', function () {
  it('returns all weekends of the given year', function () {
    var result = (0, _index.default)(new Date(2020, 0, 1));
    (0, _assert.default)(result.length === 104);
    (0, _assert.default)(result.every(_index2.default));

    _assert.default.deepStrictEqual(result[0], new Date(2020, 0, 4));

    _assert.default.deepStrictEqual(result[103], new Date(2020, 11, 27));
  });
  it('throws RangeError exception when date is invalid', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});