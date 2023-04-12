"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatDistanceToNowStrict', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(1986, 3, 4, 10, 32, 0).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  describe('seconds', function () {
    describe('when no unit is set', function () {
      it('0 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0));
        (0, _assert.default)(result === '0 seconds');
      });
      it('5 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 5));
        (0, _assert.default)(result === '5 seconds');
      });
    });
  });
  describe('minutes', function () {
    it('1 minute', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 33, 0));
      (0, _assert.default)(result === '1 minute');
    });
    it('n minutes', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 35, 0));
      (0, _assert.default)(result === '3 minutes');
    });
  });
  describe('hours', function () {
    it('1 hour', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 11, 32, 0));
      (0, _assert.default)(result === '1 hour');
    });
    it('n hours', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 13, 32, 0));
      (0, _assert.default)(result === '3 hours');
    });
  });
  describe('days', function () {
    it('1 day', function () {
      var result = (0, _index.default)(new Date(1986, 3, 5, 10, 32, 0));
      (0, _assert.default)(result === '1 day');
    });
    it('n days', function () {
      var result = (0, _index.default)(new Date(1986, 3, 7, 10, 32, 0));
      (0, _assert.default)(result === '3 days');
    });
  });
  describe('months', function () {
    it('1 month', function () {
      var result = (0, _index.default)(new Date(1986, 4, 4, 10, 32, 0));
      (0, _assert.default)(result === '1 month');
    });
    it('n months', function () {
      var result = (0, _index.default)(new Date(1986, 6, 4, 10, 32, 0));
      (0, _assert.default)(result === '3 months');
    });
  });
  describe('years', function () {
    it('1 year', function () {
      var result = (0, _index.default)(new Date(1987, 3, 4, 10, 32, 0));
      (0, _assert.default)(result === '1 year');
    });
    it('n years', function () {
      var result = (0, _index.default)(new Date(1991, 3, 4, 10, 32, 0));
      (0, _assert.default)(result === '5 years');
    });
  });
  describe('when the unit option is supplied', function () {
    describe('second', function () {
      it('0 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
          unit: 'second'
        });
        (0, _assert.default)(result === '0 seconds');
      });
      it('5 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 5), {
          unit: 'second'
        });
        (0, _assert.default)(result === '5 seconds');
      });
      it('120 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 34, 0), {
          unit: 'second'
        });
        (0, _assert.default)(result === '120 seconds');
      });
    });
    describe('minute', function () {
      it('0 minutes', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
          unit: 'minute'
        });
        (0, _assert.default)(result === '0 minutes');
      });
      it('5 minutes', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 37, 0), {
          unit: 'minute'
        });
        (0, _assert.default)(result === '5 minutes');
      });
      it('120 minutes', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 12, 32, 0), {
          unit: 'minute'
        });
        (0, _assert.default)(result === '120 minutes');
      });
    });
    describe('hour', function () {
      it('0 hours', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
          unit: 'hour'
        });
        (0, _assert.default)(result === '0 hours');
      });
      it('5 hours', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 15, 32, 0), {
          unit: 'hour'
        });
        (0, _assert.default)(result === '5 hours');
      });
      it('48 hours', function () {
        var result = (0, _index.default)(new Date(1986, 3, 6, 10, 32, 0), {
          unit: 'hour'
        });
        (0, _assert.default)(result === '48 hours');
      });
    });
    describe('day', function () {
      it('0 days', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
          unit: 'day'
        });
        (0, _assert.default)(result === '0 days');
      });
      it('5 days', function () {
        var result = (0, _index.default)(new Date(1986, 3, 9, 10, 32, 0), {
          unit: 'day'
        });
        (0, _assert.default)(result === '5 days');
      });
      it('60 days', function () {
        var result = (0, _index.default)(new Date(1986, 5, 3, 10, 32, 0), {
          unit: 'day'
        });
        (0, _assert.default)(result === '60 days');
      });
    });
    describe('month', function () {
      it('0 months', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
          unit: 'month'
        });
        (0, _assert.default)(result === '0 months');
      });
      it('5 months', function () {
        var result = (0, _index.default)(new Date(1986, 7, 4, 10, 32, 0), {
          unit: 'month'
        });
        (0, _assert.default)(result === '4 months');
      });
      it('24 months', function () {
        var result = (0, _index.default)(new Date(1988, 3, 4, 10, 32, 0), {
          unit: 'month'
        });
        (0, _assert.default)(result === '24 months');
      });
    });
    describe('year', function () {
      it('returns `1 year` - see issue 2388', function () {
        var result = (0, _index.default)(new Date(1985, 3, 4, 10, 32, 0));
        (0, _assert.default)(result === '1 year');
      });
      it('returns `2 years` - see issue 2388', function () {
        var result = (0, _index.default)(new Date(1984, 3, 4, 10, 32, 0));
        (0, _assert.default)(result === '2 years');
      });
      it('0 years', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
          unit: 'year'
        });
        (0, _assert.default)(result === '0 years');
      });
      it('5 years', function () {
        var result = (0, _index.default)(new Date(1991, 3, 4, 15, 32, 0), {
          unit: 'year'
        });
        (0, _assert.default)(result === '5 years');
      });
    });
  });
  it('accepts timestamps', function () {
    var result = (0, _index.default)(new Date(1986, 3, 4, 11, 32, 0).getTime());
    (0, _assert.default)(result === '1 hour');
  });
  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 35), {
        addSuffix: true
      });
      (0, _assert.default)(result === '25 seconds ago');
    });
    it('adds a future suffix', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true
      });
      (0, _assert.default)(result === 'in 1 hour');
    });
  });
  describe('when the roundingMethod option is supplied', function () {
    it('default is "round"', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 33, 59));
      (0, _assert.default)(result === '2 minutes');
    });
    it('"floor"', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 33, 59), {
        roundingMethod: 'floor'
      });
      (0, _assert.default)(result === '1 minute');
    });
    it('"ceil"', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 33, 1), {
        roundingMethod: 'ceil'
      });
      (0, _assert.default)(result === '2 minutes');
    });
    it('"round" (down)', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 33, 29), {
        roundingMethod: 'round'
      });
      (0, _assert.default)(result === '1 minute');
    });
    it('"round" (up)', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 33, 30), {
        roundingMethod: 'round'
      });
      (0, _assert.default)(result === '2 minutes');
    });
  });
  describe('custom locale', function () {
    it('can be passed to the function', function () {
      var localizeDistance = function localizeDistance(token, count, options) {
        (0, _assert.default)(token === 'xSeconds');
        (0, _assert.default)(count === 15);
        (0, _assert.default)(options.addSuffix === true);
        (0, _assert.default)(options.comparison < 0);
        return 'It works!';
      };

      var customLocale = {
        formatDistance: localizeDistance
      };
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 45), {
        addSuffix: true,
        // @ts-expect-error
        locale: customLocale
      });
      (0, _assert.default)(result === 'It works!');
    });
    describe('does not contain `formatDistance` property', function () {
      it('throws `RangeError`', function () {
        var customLocale = {};

        var block = function block() {
          return (0, _index.default)(new Date(1986, 3, 4, 10, 37, 0), {
            unit: 'minute',
            // @ts-expect-error
            locale: customLocale
          });
        };

        _assert.default.throws(block, RangeError);
      });
    });
  });
  describe('edge cases', function () {
    it('detects unit correctly for short months', function () {
      var result = (0, _index.default)(new Date(1986, 2
      /* Mar */
      , 7));
      (0, _assert.default)(result === '28 days');
    });
  });
  it('throws `RangeError` if the date is `Invalid Date`', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});