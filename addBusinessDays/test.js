"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('addBusinessDays', function () {
  it('adds the given number of business days', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), 10);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 15));
  });
  it('handles negative amount', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 15), -10);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns the Monday when 1 day is added on the Friday', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 0
    /* Jan */
    , 10), 1), // Friday
    new Date(2020, 0
    /* Jan */
    , 13) // Monday
    );
  });
  it('returns the Monday when 1 day is added on the Satuday', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 0
    /* Jan */
    , 11), 1), // Saturday
    new Date(2020, 0
    /* Jan */
    , 13) // Monday
    );
  });
  it('returns the Monday when 1 day is added on the Sunday', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 0
    /* Jan */
    , 12), 1), // Sunday
    new Date(2020, 0
    /* Jan */
    , 13) // Monday
    );
  });
  it('can handle a large number of business days', function () {
    // @ts-ignore
    if (typeof global.timeout === 'function') {
      // @ts-ignore
      global.timeout(500
      /* 500 ms test timeout */
      );
    }

    var result = (0, _index.default)(new Date(2014, 0
    /* Jan */
    , 1), 3387885);

    _assert.default.deepStrictEqual(result, new Date(15000, 0
    /* Jan */
    , 1));
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1).getTime(), 10);

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 15));
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
  it('starting from a weekend day should land on a weekday when reducing a divisible by 5', function () {
    var substractResult = (0, _index.default)(new Date(2019, 7, 18), -5);

    _assert.default.deepStrictEqual(substractResult, new Date(2019, 7, 12));

    var subtractResultWeekend = (0, _index.default)(new Date(2019, 7, 17), -5);

    _assert.default.deepStrictEqual(subtractResultWeekend, new Date(2019, 7, 12));

    var addResult = (0, _index.default)(new Date(2019, 7, 18), 5);

    _assert.default.deepStrictEqual(addResult, new Date(2019, 7, 23));

    var addResultWeekend = (0, _index.default)(new Date(2019, 7, 17), 5);

    _assert.default.deepStrictEqual(addResultWeekend, new Date(2019, 7, 23));
  });
});