"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('addLeadingZeros', function () {
  it('adds leading zeros when number has fewer digits than target length', function () {
    _assert.default.strictEqual((0, _index.default)(7, 3), '007');

    _assert.default.strictEqual((0, _index.default)(7, 2), '07');

    _assert.default.strictEqual((0, _index.default)(7, 1), '7');

    _assert.default.strictEqual((0, _index.default)(7, 0), '7');

    _assert.default.strictEqual((0, _index.default)(7, -1), '7');
  });
});