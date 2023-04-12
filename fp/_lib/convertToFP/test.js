"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('convertToFP', function () {
  function fn(a, b, c) {
    return 'a b c'.replace('a', String(a)).replace('b', String(b)).replace('c', String(c));
  }

  describe('arity of converted function === arity of initial function', function () {
    it('allows arguments to be curried (and reverses their order)', function () {
      var fpFn = (0, _index.default)(fn, 3);
      (0, _assert.default)(fpFn(3)(2)(1) === '1 2 3');
    });
    it('allows to group arguments', function () {
      var fpFn = (0, _index.default)(fn, 3);
      (0, _assert.default)(fpFn(3, 2)(1) === '1 2 3');
      (0, _assert.default)(fpFn(3)(2, 1) === '1 2 3');
    });
    it('allows the function to be called with all arguments in the reversed order', function () {
      var fpFn = (0, _index.default)(fn, 3);
      (0, _assert.default)(fpFn(3, 2, 1) === '1 2 3');
    });
    it('ignores calls without curried arguments', function () {
      var fpFn = (0, _index.default)(fn, 3);
      (0, _assert.default)(fpFn()()(3, 2)()()(1) === '1 2 3');
    });
    it('ignores extra curried arguments in the last group', function () {
      var fpFn = (0, _index.default)(fn, 3);
      (0, _assert.default)(fpFn(3, 2, 1, 0, -1, -2) === '1 2 3');
      (0, _assert.default)(fpFn(3)(2)(1, 0, -1, -2) === '1 2 3');
    });
  });
  describe('arity of converted function < arity of initial function', function () {
    it('calls the initial function with a short list of arguments', function () {
      var fpFn = (0, _index.default)(fn, 2);
      (0, _assert.default)(fpFn(2)(1) === '1 2 undefined');
      (0, _assert.default)(fpFn(2, 1) === '1 2 undefined');
    });
    it('ignores extra curried arguments in the last group', function () {
      var fpFn = (0, _index.default)(fn, 2);
      (0, _assert.default)(fpFn(3)(2, 1) === '2 3 undefined');
      (0, _assert.default)(fpFn(3, 2, 1) === '2 3 undefined');
    });
  });
  describe('arity of converted function > arity of initial function', function () {
    it('works, but ignores the extra arguments', function () {
      var fpFn = (0, _index.default)(fn, 4);
      (0, _assert.default)(fpFn(4)(3)(2)(1) === '1 2 3');
      (0, _assert.default)(fpFn(4, 3, 2, 1) === '1 2 3');
    });
  });
  describe('arity of converted function === 0', function () {
    it('returns the constant instead of function', function () {
      var result = (0, _index.default)(fn, 0);
      (0, _assert.default)(result === 'undefined undefined undefined');
    });
  });
});