"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('assign', function () {
  it('assigns properties of the second argument to the first argument', function () {
    var object = {};
    (0, _index.default)(object, {
      a: 1,
      b: 2,
      c: 3
    });

    _assert.default.deepStrictEqual(object, {
      a: 1,
      b: 2,
      c: 3
    });
  });
  it('the object passed as 2nd argument remains unchanged when the result is mutated', function () {
    var object = {
      a: 1,
      b: 2,
      c: 3
    };
    var result = (0, _index.default)({}, object);
    result.c = 4;

    _assert.default.deepStrictEqual(object, {
      a: 1,
      b: 2,
      c: 3
    });
  });
  it('returns the first argument when the second argument is `undefined`', function () {
    var original = {
      a: 1,
      b: 2,
      c: 3
    };
    var result = (0, _index.default)(original, undefined);
    (0, _assert.default)(original === result);
  });
  it('throws TypeError exception if the first argument is `undefined', function () {
    _assert.default.throws(_index.default.bind(null, undefined, {
      a: 1,
      b: 2,
      c: 3
    }), TypeError);
  });
});