"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isValid', function () {
  it('returns true if the given date is valid', function () {
    var result = (0, _index.default)(new Date());
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(''));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    (0, _assert.default)((0, _index.default)(new Date(2014, 1
    /* Feb */
    , 11).getTime()) === true);
    (0, _assert.default)((0, _index.default)(NaN) === false);
  });
  it('treats null as an invalid date', function () {
    var result = (0, _index.default)(null);
    (0, _assert.default)(result === false);
  });
});