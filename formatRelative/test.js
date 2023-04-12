"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatRelative', function () {
  var baseDate = new Date(1986, 3
  /* Apr */
  , 4, 10, 32, 0, 900);
  it('accepts a timestamp', function () {
    var date = new Date(2014, 3
    /* Apr */
    , 4);
    (0, _assert.default)((0, _index.default)(date.getTime(), baseDate.getTime()) === '04/04/2014');
  });
  it('before the last week', function () {
    var result = (0, _index.default)(new Date(1986, 2
    /* Mar */
    , 28, 16, 50), baseDate);
    (0, _assert.default)(result === '03/28/1986');
  });
  it('last week', function () {
    var result = (0, _index.default)(new Date(1986, 3
    /* Apr */
    , 1), baseDate);
    (0, _assert.default)(result === 'last Tuesday at 12:00 AM');
  });
  it('yesterday', function () {
    var result = (0, _index.default)(new Date(1986, 3
    /* Apr */
    , 3, 22, 22), baseDate);
    (0, _assert.default)(result === 'yesterday at 10:22 PM');
  });
  it('today', function () {
    var result = (0, _index.default)(new Date(1986, 3
    /* Apr */
    , 4, 16, 50), baseDate);
    (0, _assert.default)(result === 'today at 4:50 PM');
  });
  it('tomorrow', function () {
    var result = (0, _index.default)(new Date(1986, 3
    /* Apr */
    , 5, 7, 30), baseDate);
    (0, _assert.default)(result === 'tomorrow at 7:30 AM');
  });
  it('next week', function () {
    var result = (0, _index.default)(new Date(1986, 3
    /* Apr */
    , 6, 12, 0), baseDate);
    (0, _assert.default)(result === 'Sunday at 12:00 PM');
  });
  it('after the next week', function () {
    var result = (0, _index.default)(new Date(1986, 3
    /* Apr */
    , 11, 16, 50), baseDate);
    (0, _assert.default)(result === '04/11/1986');
  });
  describe('edge cases', function () {
    it("throws RangeError if the date isn't valid", function () {
      _assert.default.throws(_index.default.bind(null, new Date(NaN), baseDate), RangeError);
    });
    it("throws RangeError if the base date isn't valid", function () {
      _assert.default.throws(_index.default.bind(null, new Date(2017, 0
      /* Jan */
      , 1), new Date(NaN)), RangeError);
    });
    it("throws RangeError if both dates aren't valid", function () {
      _assert.default.throws(_index.default.bind(null, new Date(NaN), new Date(NaN)), RangeError);
    });
    it('handles dates before 100 AD', function () {
      var date = new Date(0);
      date.setFullYear(7, 11
      /* Dec */
      , 31);
      date.setHours(0, 0, 0, 0);
      (0, _assert.default)((0, _index.default)(date, baseDate) === '12/31/0007');
    });
  });
  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      var customLocale = {
        localize: {
          month: function month() {
            return 'works';
          }
        },
        formatLong: {
          date: function date() {
            return "'It' MMMM";
          }
        },
        formatRelative: function formatRelative() {
          return "P 'perfectly!'";
        }
      };
      var result = (0, _index.default)(new Date(1986, 2
      /* Mar */
      , 28, 16, 50), baseDate, {
        // @ts-expect-error
        locale: customLocale
      });
      (0, _assert.default)(result === 'It works perfectly!');
    });
    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      var customLocale = {
        formatLong: {},
        formatRelative: function formatRelative() {
          return '';
        }
      };

      var block = function block() {
        return (0, _index.default)(new Date(2017, 0, 1), baseDate, {
          // @ts-expect-error
          locale: customLocale
        });
      };

      _assert.default.throws(block, RangeError);
    });
    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      var customLocale = {
        localize: {},
        formatRelative: function formatRelative() {
          return '';
        }
      };

      var block = function block() {
        return (0, _index.default)(new Date(2017, 0, 1), baseDate, {
          // @ts-expect-error
          locale: customLocale
        });
      };

      _assert.default.throws(block, RangeError);
    });
    it("throws `RangeError` if `options.locale` doesn't have `formatRelative` property", function () {
      var customLocale = {
        localize: {},
        formatLong: {}
      };

      var block = function block() {
        return (0, _index.default)(new Date(2017, 0, 1), baseDate, {
          // @ts-expect-error
          locale: customLocale
        });
      };

      _assert.default.throws(block, RangeError);
    });
  });
});