"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isFuture', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date is in the future', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 31));
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is in the past', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1));
    (0, _assert.default)(result === false);
  });
  it('returns false if the given date is now', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 25));
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 31).getTime());
    (0, _assert.default)(result === true);
  });
});