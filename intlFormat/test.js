"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
// Before Node version 13.0.0, only the locale data for en-US is available by default.
var hasFullICU = function hasFullICU() {
  try {
    var january = new Date(9e8);
    var spanish = new Intl.DateTimeFormat('es', {
      month: 'long'
    });
    return spanish.format(january) === 'enero';
  } catch (err) {
    return false;
  }
};

var fullICUOnly = hasFullICU() ? it : it.skip;

var getOperationSystemLocale = function getOperationSystemLocale() {
  // https://stackoverflow.com/questions/46072248/node-js-how-to-detect-user-language/46072415
  return Intl.DateTimeFormat().resolvedOptions().locale;
};

describe('intlFormat', function () {
  describe('formats date', function () {
    fullICUOnly("should work without format's options and locale's options", function () {
      var date = new Date(2019, 9
      /* Oct */
      , 4, 12, 30, 13, 456);
      var result = (0, _index.default)(date);
      var localeResult = (0, _index.default)(date, {
        locale: getOperationSystemLocale()
      });
      (0, _assert.default)(result === localeResult);
    });
    fullICUOnly("should work with only format's options", function () {
      var date = new Date(2019, 9
      /* Oct */
      , 4, 12, 30, 13, 456);
      var formatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'America/Los_Angeles'
      };
      var result = (0, _index.default)(date, formatOptions);
      var localeResult = (0, _index.default)(date, formatOptions, {
        locale: getOperationSystemLocale()
      });
      (0, _assert.default)(result === localeResult);
    });
    fullICUOnly("should work with only locale's options", function () {
      var date = new Date(2019, 9
      /* Oct */
      , 4, 12, 30, 13, 456); // Korean uses year-month-day order

      var localeOptions = {
        locale: 'ko-KR'
      };
      var result = (0, _index.default)(date, localeOptions);
      (0, _assert.default)(result === '2019. 10. 4.');
    });
    fullICUOnly("should work with format's options and locale's options", function () {
      var date = new Date(2019, 9
      /* Oct */
      , 4, 12, 30, 13, 456);
      var formatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var localeOptions = {
        locale: 'de-DE'
      };
      var result = (0, _index.default)(date, formatOptions, localeOptions);
      (0, _assert.default)(result === 'Freitag, 4. Oktober 2019');
    });
  });
  it('throws RangeError if the date value is invalid', function () {
    _assert.default.throws(function () {
      return (0, _index.default)(new Date(NaN));
    }, RangeError);
  });
});