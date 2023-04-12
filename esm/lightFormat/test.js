/* eslint-env mocha */
import assert from 'assert';
import lightFormat from "./index.js";
describe('lightFormat', function () {
  var date = new Date(1986, 3
  /* Apr */
  , 4, 10, 32, 55, 123);
  it('accepts a timestamp', function () {
    var date = new Date(2014, 3, 4).getTime();
    assert(lightFormat(date, 'yyyy-MM-dd') === '2014-04-04');
  });
  it('escapes characters between the single quote characters', function () {
    var result = lightFormat(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'");
    assert(result === 'yyyy-04-04D yyyy-04-04');
  });
  it('two single quote characters are transformed into a "real" single quote', function () {
    var date = new Date(2014, 3, 4, 5);
    assert(lightFormat(date, "''h 'o''clock'''") === "'5 o'clock'");
  });
  it('accepts new line charactor', function () {
    var date = new Date(2014, 3, 4, 5);
    assert.strictEqual(lightFormat(date, "yyyy-MM-dd'\n'HH:mm:ss"), '2014-04-04\n05:00:00');
  });
  describe('year', function () {
    describe('regular year', function () {
      it('works as expected', function () {
        var result = lightFormat(date, 'y yy yyy yyyy yyyyy');
        assert(result === '1986 86 1986 1986 01986');
      });
      it('1 BC formats as 1', function () {
        var date = new Date(0);
        date.setFullYear(0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        var result = lightFormat(date, 'y');
        assert(result === '1');
      });
      it('2 BC formats as 2', function () {
        var date = new Date(0);
        date.setFullYear(-1, 0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        var result = lightFormat(date, 'y');
        assert(result === '2');
      });
    });
  });
  describe('month', function () {
    it('formatting month', function () {
      var result = lightFormat(date, 'M MM');
      assert(result === '4 04');
    });
  });
  describe('day', function () {
    it('date', function () {
      var result = lightFormat(date, 'd dd');
      assert(result === '4 04');
    });
  });
  describe('hour', function () {
    it('hour [1-12]', function () {
      var result = lightFormat(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'h hh');
      assert(result === '12 12');
    });
    it('hour [0-23]', function () {
      var result = lightFormat(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'H HH');
      assert(result === '0 00');
    });
    describe('AM, PM', function () {
      it('works as expected', function () {
        var result = lightFormat(new Date(2018, 0
        /* Jan */
        , 1, 0, 0, 0, 0), 'a aa aaa aaaa aaaaa');
        assert(result === 'AM AM am a.m. a');
        var pmResult = lightFormat(new Date(2018, 0
        /* Jan */
        , 1, 13, 0, 0, 0), 'a aa aaa aaaa aaaaa');
        assert(pmResult === 'PM PM pm p.m. p');
      });
      it('12 PM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 4, 12, 0, 0, 900);
        assert(lightFormat(date, 'h H a') === '12 12 PM');
      });
      it('12 AM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 0, 0, 0, 900);
        assert(lightFormat(date, 'h H a') === '12 0 AM');
      });
    });
  });
  it('minute', function () {
    var result = lightFormat(date, 'm mm');
    assert(result === '32 32');
  });
  describe('second', function () {
    it('second', function () {
      var result = lightFormat(date, 's ss');
      assert(result === '55 55');
    });
  });
  it('fractional seconds', function () {
    var result = lightFormat(date, 'S SS SSS SSSS');
    assert(result === '1 12 123 1230');
  });
  it('returns empty string when the format is an empty string', function () {
    assert(lightFormat(Date.now(), '') === '');
  });
  it("throws RangeError if the date isn't valid", function () {
    assert.throws(lightFormat.bind(null, new Date(NaN), 'MMMM d, yyyy'), RangeError);
  });
  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
    assert.throws(lightFormat.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError);
  });
});