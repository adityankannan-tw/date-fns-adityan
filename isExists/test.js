"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = (0, _index.default)(2018, 0, 31);
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is invalid', function () {
    var result = (0, _index.default)(2018, 1
    /* Feb */
    , 31);
    (0, _assert.default)(result === false);
  });
});