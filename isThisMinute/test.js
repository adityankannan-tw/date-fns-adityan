"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isThisMinute', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 15, 500).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same minute', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 30);
    (0, _assert.default)((0, _index.default)(date) === true);
  });
  it('returns false if the given date and the current date have different minutes', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 31);
    (0, _assert.default)((0, _index.default)(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 25, 18, 30, 30).getTime();
    (0, _assert.default)((0, _index.default)(date) === true);
  });
});