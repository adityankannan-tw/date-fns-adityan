"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('subBusinessDays', function () {
  it('substract the given number of business days', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 10);

    _assert.default.deepStrictEqual(result, new Date(2014, 7
    /* Aug */
    , 18));
  });
  it('handles negative amount', function () {
    var result = (0, _index.default)(new Date(2014, 7
    /* Sep */
    , 18), -10);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('can handle a large number of business days', function () {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500
      /* 500 ms test timeout */
      );
    }

    var result = (0, _index.default)(new Date(15000, 0
    /* Jan */
    , 1), 3387885);

    _assert.default.deepStrictEqual(result, new Date(2014, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 10);

    _assert.default.deepStrictEqual(result, new Date(2014, 7
    /* Aug */
    , 18));
  });
  it('does not mutate the original date', function () {
    var date = new Date(2014, 8
    /* Sep */
    , 1);
    (0, _index.default)(date, 11);

    _assert.default.deepStrictEqual(date, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    var result = (0, _index.default)(new Date(NaN), 10);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
  it('returns `Invalid Date` if the given amount is NaN', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), NaN);
    (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
  });
});