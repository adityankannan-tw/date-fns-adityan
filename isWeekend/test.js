"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isWeekend', function () {
  it('returns true if the given date is in a weekend', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 5));
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is not in a weekend', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 6));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 5).getTime());
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(result === false);
  });
});