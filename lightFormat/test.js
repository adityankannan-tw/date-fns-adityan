"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('lightFormat', function () {
  var date = new Date(1986, 3
  /* Apr */
  , 4, 10, 32, 55, 123);
  it('accepts a timestamp', function () {
    var date = new Date(2014, 3, 4).getTime();
    (0, _assert.default)((0, _index.default)(date, 'yyyy-MM-dd') === '2014-04-04');
  });
  it('escapes characters between the single quote characters', function () {
    var result = (0, _index.default)(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'");
    (0, _assert.default)(result === 'yyyy-04-04D yyyy-04-04');
  });
  it('two single quote characters are transformed into a "real" single quote', function () {
    var date = new Date(2014, 3, 4, 5);
    (0, _assert.default)((0, _index.default)(date, "''h 'o''clock'''") === "'5 o'clock'");
  });
  it('accepts new line charactor', function () {
    var date = new Date(2014, 3, 4, 5);

    _assert.default.strictEqual((0, _index.default)(date, "yyyy-MM-dd'\n'HH:mm:ss"), '2014-04-04\n05:00:00');
  });
  describe('year', function () {
    describe('regular year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'y yy yyy yyyy yyyyy');
        (0, _assert.default)(result === '1986 86 1986 1986 01986');
      });
      it('1 BC formats as 1', function () {
        var date = new Date(0);
        date.setFullYear(0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'y');
        (0, _assert.default)(result === '1');
      });
      it('2 BC formats as 2', function () {
        var date = new Date(0);
        date.setFullYear(-1, 0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'y');
        (0, _assert.default)(result === '2');
      });
    });
  });
  describe('month', function () {
    it('formatting month', function () {
      var result = (0, _index.default)(date, 'M MM');
      (0, _assert.default)(result === '4 04');
    });
  });
  describe('day', function () {
    it('date', function () {
      var result = (0, _index.default)(date, 'd dd');
      (0, _assert.default)(result === '4 04');
    });
  });
  describe('hour', function () {
    it('hour [1-12]', function () {
      var result = (0, _index.default)(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'h hh');
      (0, _assert.default)(result === '12 12');
    });
    it('hour [0-23]', function () {
      var result = (0, _index.default)(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'H HH');
      (0, _assert.default)(result === '0 00');
    });
    describe('AM, PM', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(new Date(2018, 0
        /* Jan */
        , 1, 0, 0, 0, 0), 'a aa aaa aaaa aaaaa');
        (0, _assert.default)(result === 'AM AM am a.m. a');
        var pmResult = (0, _index.default)(new Date(2018, 0
        /* Jan */
        , 1, 13, 0, 0, 0), 'a aa aaa aaaa aaaaa');
        (0, _assert.default)(pmResult === 'PM PM pm p.m. p');
      });
      it('12 PM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 4, 12, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h H a') === '12 12 PM');
      });
      it('12 AM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 0, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h H a') === '12 0 AM');
      });
    });
  });
  it('minute', function () {
    var result = (0, _index.default)(date, 'm mm');
    (0, _assert.default)(result === '32 32');
  });
  describe('second', function () {
    it('second', function () {
      var result = (0, _index.default)(date, 's ss');
      (0, _assert.default)(result === '55 55');
    });
  });
  it('fractional seconds', function () {
    var result = (0, _index.default)(date, 'S SS SSS SSSS');
    (0, _assert.default)(result === '1 12 123 1230');
  });
  it('returns empty string when the format is an empty string', function () {
    (0, _assert.default)((0, _index.default)(Date.now(), '') === '');
  });
  it("throws RangeError if the date isn't valid", function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN), 'MMMM d, yyyy'), RangeError);
  });
  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
    _assert.default.throws(_index.default.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError);
  });
});