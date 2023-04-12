"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('startOfToday', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 14, 30, 45, 500).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns the current date with the time setted to 00:00:00', function () {
    var result = (0, _index.default)();

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 25));
  });
});