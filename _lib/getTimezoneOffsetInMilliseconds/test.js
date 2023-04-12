"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getTimezoneOffsetInMilliseconds', function () {
  it('works for a modern date', function () {
    var date = new Date(2018, 0
    /* Jan */
    , 1, 12, 34, 56, 789);
    var result = date.getTime() - (0, _index.default)(date);
    var expectedResult = Date.UTC(2018, 0
    /* Jan */
    , 1, 12, 34, 56, 789);
    (0, _assert.default)(result === expectedResult);
  });
  it('works for a date before standardized timezones', function () {
    var date = new Date(1800, 0
    /* Jan */
    , 1, 12, 34, 56, 789);
    var result = date.getTime() - (0, _index.default)(date);
    var expectedResult = Date.UTC(1800, 0
    /* Jan */
    , 1, 12, 34, 56, 789);
    (0, _assert.default)(result === expectedResult);
  });
  it('works for a date BC', function () {
    var date = new Date(-500, 0
    /* Jan */
    , 1, 12, 34, 56, 789);
    var result = date.getTime() - (0, _index.default)(date);
    var expectedResult = Date.UTC(-500, 0
    /* Jan */
    , 1, 12, 34, 56, 789);
    (0, _assert.default)(result === expectedResult);
  });
});