"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = _interopRequireDefault(require("../locale/eo/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isMatch', function () {
  it('accepts a dd-MM-yyyy format against 22-02-1998', function () {
    (0, _assert.default)((0, _index.default)('22-02-1998', 'dd-MM-yyyy'));
  });
  it('reject a yyyy-dd-MM format against 22-02-1998', function () {
    (0, _assert.default)(!(0, _index.default)('22-02-1998', 'yyyy-dd-MM'));
  });
  it('accepts a date & format with locale', function () {
    (0, _assert.default)((0, _index.default)('28-a de februaro', "do 'de' MMMM", {
      locale: _index2.default
    }));
  });
});