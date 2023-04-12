"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isLastDayOfMonth', function () {
  it('returns true if the given date is in the last day of month', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 31));
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is not in the last day of month', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 30));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 9
    /* Oct */
    , 31).getTime();
    var result = (0, _index.default)(date);
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result === false);
  });
});