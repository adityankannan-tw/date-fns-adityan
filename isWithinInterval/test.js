"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isWithinInterval', function () {
  it('returns true if the given date in within the given interval', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 31), {
      start: new Date(2014, 8
      /* Sep */
      , 1),
      end: new Date(2014, 11
      /* Dec */
      , 31)
    });
    (0, _assert.default)(result === true);
  });
  it('returns true if the given date has same time as the left boundary of the interval', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), {
      start: new Date(2014, 8
      /* Sep */
      , 1),
      end: new Date(2014, 11
      /* Dec */
      , 31)
    });
    (0, _assert.default)(result === true);
  });
  it('returns true if the given date has same time as the right boundary of the interval', function () {
    var result = (0, _index.default)(new Date(2014, 11
    /* Dec */
    , 31), {
      start: new Date(2014, 8
      /* Sep */
      , 1),
      end: new Date(2014, 11
      /* Dec */
      , 31)
    });
    (0, _assert.default)(result === true);
  });
  it('returns true if the given date and the both boundaries are the same', function () {
    var result = (0, _index.default)(new Date(2014, 11
    /* Dec */
    , 31), {
      start: new Date(2014, 11
      /* Dec */
      , 31),
      end: new Date(2014, 11
      /* Dec */
      , 31)
    });
    (0, _assert.default)(result === true);
  });
  it('returns false if the given date is outside of the interval', function () {
    var result = (0, _index.default)(new Date(2014, 1
    /* Feb */
    , 11), {
      start: new Date(2014, 8
      /* Sep */
      , 1),
      end: new Date(2014, 11
      /* Dec */
      , 31)
    });
    (0, _assert.default)(result === false);
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 9
    /* Oct */
    , 31).getTime(), {
      start: new Date(2014, 8
      /* Sep */
      , 1).getTime(),
      end: new Date(2014, 11
      /* Dec */
      , 31).getTime()
    });
    (0, _assert.default)(result === true);
  });
  it('throws an exception if the start date is after the end date', function () {
    var block = _index.default.bind(null, new Date(2014, 9
    /* Oct */
    , 31), {
      start: new Date(2014, 11
      /* Dec */
      , 31),
      end: new Date(2014, 8
      /* Sep */
      , 1)
    });

    _assert.default.throws(block, RangeError);
  });
  it('returns false if the given date is `Invalid Date`', function () {
    var result = (0, _index.default)(new Date(NaN), {
      start: new Date(2014, 8
      /* Sep */
      , 1),
      end: new Date(2014, 11
      /* Dec */
      , 31)
    });
    (0, _assert.default)(result === false);
  });
  it('throws an exception if the start date is `Invalid Date`', function () {
    var block = _index.default.bind(null, new Date(2014, 9
    /* Oct */
    , 31), {
      start: new Date(NaN),
      end: new Date(2014, 8
      /* Sep */
      , 1)
    });

    _assert.default.throws(block, RangeError);
  });
  it('throws an exception if the end date is `Invalid Date`', function () {
    var block = _index.default.bind(null, new Date(2014, 9
    /* Oct */
    , 31), {
      start: new Date(2014, 11
      /* Dec */
      , 31),
      end: new Date(NaN)
    });

    _assert.default.throws(block, RangeError);
  });
});