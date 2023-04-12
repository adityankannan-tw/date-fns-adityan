"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('cloneObject', function () {
  it('makes a copy of an object', function () {
    var result = (0, _index.default)({
      a: 1,
      b: 2,
      c: 3
    });

    _assert.default.deepStrictEqual(result, {
      a: 1,
      b: 2,
      c: 3
    });
  });
  it('the copy remains unchanged when the original is changed', function () {
    var original = {
      a: 1,
      b: 2,
      c: 3
    };
    var copy = (0, _index.default)(original);
    original.c = 4;

    _assert.default.deepStrictEqual(copy, {
      a: 1,
      b: 2,
      c: 3
    });
  });
  it('the original remains unchanged when the copy is changed', function () {
    var original = {
      a: 1,
      b: 2,
      c: 3
    };
    var copy = (0, _index.default)(original);
    copy.c = 4;

    _assert.default.deepStrictEqual(original, {
      a: 1,
      b: 2,
      c: 3
    });
  });
  it('returns an empty object when argument is `undefined`', function () {
    var result = (0, _index.default)(undefined);

    _assert.default.deepStrictEqual(result, {});
  });
});