"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isThisWeek', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 21);
    (0, _assert.default)((0, _index.default)(date) === true);
  });
  it('returns false if the given date and the current date have different weeks', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 29);
    (0, _assert.default)((0, _index.default)(date) === false);
  });
  it('allows to specify which day is the first day of the week', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 28);
    (0, _assert.default)((0, _index.default)(date, {
      weekStartsOn: 1
    }) === true);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 21).getTime();
    (0, _assert.default)((0, _index.default)(date) === true);
  });
});