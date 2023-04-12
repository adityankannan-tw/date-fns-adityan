"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getQuarter', function () {
  it('returns the quarter of the given date', function () {
    var result = (0, _index.default)(new Date(2014, 6
    /* Jul */
    , 2));
    (0, _assert.default)(result === 3);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 3
    /* Apr */
    , 2).getTime());
    (0, _assert.default)(result === 2);
  });
  it('returns NaN if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN));
    (0, _assert.default)(isNaN(result));
  });
});