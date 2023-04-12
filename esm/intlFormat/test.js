/* eslint-env mocha */
import assert from 'assert';
import intlFormat from "./index.js"; // Before Node version 13.0.0, only the locale data for en-US is available by default.

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
      var result = intlFormat(date);
      var localeResult = intlFormat(date, {
        locale: getOperationSystemLocale()
      });
      assert(result === localeResult);
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
      var result = intlFormat(date, formatOptions);
      var localeResult = intlFormat(date, formatOptions, {
        locale: getOperationSystemLocale()
      });
      assert(result === localeResult);
    });
    fullICUOnly("should work with only locale's options", function () {
      var date = new Date(2019, 9
      /* Oct */
      , 4, 12, 30, 13, 456); // Korean uses year-month-day order

      var localeOptions = {
        locale: 'ko-KR'
      };
      var result = intlFormat(date, localeOptions);
      assert(result === '2019. 10. 4.');
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
      var result = intlFormat(date, formatOptions, localeOptions);
      assert(result === 'Freitag, 4. Oktober 2019');
    });
  });
  it('throws RangeError if the date value is invalid', function () {
    assert.throws(function () {
      return intlFormat(new Date(NaN));
    }, RangeError);
  });
});