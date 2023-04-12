"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatDistanceToNow', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(1986, 3, 4, 10, 32, 0).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  describe('seconds', function () {
    describe('when the includeSeconds option is true', function () {
      it('less than 5 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 58), {
          includeSeconds: true
        });
        (0, _assert.default)(result === 'less than 5 seconds');
      });
      it('less than 10 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 52), {
          includeSeconds: true
        });
        (0, _assert.default)(result === 'less than 10 seconds');
      });
      it('less than 20 seconds', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 45), {
          includeSeconds: true
        });
        (0, _assert.default)(result === 'less than 20 seconds');
      });
      it('half a minute', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 35), {
          includeSeconds: true
        });
        (0, _assert.default)(result === 'half a minute');
      });
      it('less than a minute', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 15), {
          includeSeconds: true
        });
        (0, _assert.default)(result === 'less than a minute');
      });
      it('1 minute', function () {
        var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 0), {
          includeSeconds: true
        });
        (0, _assert.default)(result === '1 minute');
      });
    });
  });
  describe('minutes', function () {
    it('less than a minute', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 40));
      (0, _assert.default)(result === 'less than a minute');
    });
    it('1 minute', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 10));
      (0, _assert.default)(result === '1 minute');
    });
    it('n minutes', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 29, 10));
      (0, _assert.default)(result === '3 minutes');
    });
  });
  describe('hours', function () {
    it('about 1 hour', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 9, 32, 0));
      (0, _assert.default)(result === 'about 1 hour');
    });
    it('about n hours', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 7, 32, 0));
      (0, _assert.default)(result === 'about 3 hours');
    });
  });
  describe('days', function () {
    it('1 day', function () {
      var result = (0, _index.default)(new Date(1986, 3, 3, 10, 32, 0));
      (0, _assert.default)(result === '1 day');
    });
    it('n days', function () {
      var result = (0, _index.default)(new Date(1986, 3, 1, 10, 32, 0));
      (0, _assert.default)(result === '3 days');
    });
  });
  describe('months', function () {
    it('about 1 month', function () {
      var result = (0, _index.default)(new Date(1986, 2, 4, 10, 32, 0));
      (0, _assert.default)(result === 'about 1 month');
    });
    it('n months', function () {
      var result = (0, _index.default)(new Date(1986, 0, 4, 10, 32, 0));
      (0, _assert.default)(result === '3 months');
    });
  });
  describe('years', function () {
    it('about 1 year', function () {
      var result = (0, _index.default)(new Date(1985, 3, 4, 10, 32, 0));
      (0, _assert.default)(result === 'about 1 year');
    });
    it('over 1 year', function () {
      var result = (0, _index.default)(new Date(1984, 10, 4, 10, 32, 0));
      (0, _assert.default)(result === 'over 1 year');
    });
    it('almost n years', function () {
      var result = (0, _index.default)(new Date(1983, 4, 4, 10, 32, 0));
      (0, _assert.default)(result === 'almost 3 years');
    });
    it('about n years', function () {
      var result = (0, _index.default)(new Date(1983, 3, 4, 10, 32, 0));
      (0, _assert.default)(result === 'about 3 years');
    });
    it('over n years', function () {
      var result = (0, _index.default)(new Date(1982, 10, 4, 10, 32, 0));
      (0, _assert.default)(result === 'over 3 years');
    });
  });
  it('accepts a timestamp', function () {
    var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 40).getTime());
    (0, _assert.default)(result === 'less than a minute');
  });
  describe('when the addSuffix option is true', function () {
    it('adds a past suffix', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 10, 31, 35), {
        includeSeconds: true,
        addSuffix: true
      });
      (0, _assert.default)(result === 'half a minute ago');
    });
    it('adds a future suffix', function () {
      var result = (0, _index.default)(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true
      });
      (0, _assert.default)(result === 'in about 1 hour');
    });
  });
  describe('custom locale', function () {
    it('can be passed to the function', function () {
      var localizeDistance = function localizeDistance(token, count, options) {
        (0, _assert.default)(token === 'aboutXHours');
        (0, _assert.default)(count === 1);
        (0, _assert.default)(options.addSuffix === true);
        (0, _assert.default)(options.comparison > 0);
        return 'It works!';
      };

      var customLocale = {
        formatDistance: localizeDistance
      };
      var result = (0, _index.default)(new Date(1986, 3, 4, 11, 32, 0), {
        addSuffix: true,
        // @ts-expect-error
        locale: customLocale
      });
      (0, _assert.default)(result === 'It works!');
    });
    describe('does not contain `distanceInWords` property', function () {
      it('throws `RangeError`', function () {
        var customLocale = {};

        var block = function block() {
          return (0, _index.default)(new Date(1986, 3, 4, 10, 32, 0), {
            includeSeconds: true,
            // @ts-expect-error
            locale: customLocale
          });
        };

        _assert.default.throws(block, RangeError);
      });
    });
  });
  it('throws RangeError if the passed date is `Invalid Date`', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});