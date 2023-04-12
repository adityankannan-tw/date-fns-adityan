/* eslint-env mocha */
import assert from 'assert';
import parseISO from "./index.js";
describe('parseISO', function () {
  describe('string argument', function () {
    describe('centuries', function () {
      it('parses YY', function () {
        var result = parseISO('20');
        assert.deepStrictEqual(result, new Date(2000, 0
        /* Jan */
        , 1));
      });
    });
    describe('years', function () {
      it('parses YYYY', function () {
        var result = parseISO('2014');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 1));
      });
    });
    describe('months', function () {
      it('parses YYYY-MM', function () {
        var result = parseISO('2014-02');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 1));
      });
    });
    describe('weeks', function () {
      it('parses YYYY-Www', function () {
        var result = parseISO('2014-W02');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 6));
      });
      it('parses YYYYWww', function () {
        var result = parseISO('2014W02');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 6));
      });
    });
    describe('calendar dates', function () {
      it('parses YYYY-MM-DD', function () {
        var result = parseISO('2014-02-11');
        assert.deepStrictEqual(result, new Date(2014, 1,
        /* Feb */
        11));
      });
      it('parses YYYYMMDD', function () {
        var result = parseISO('20140211');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11));
      });
    });
    describe('week dates', function () {
      it('parses YYYY-Www-D', function () {
        var result = parseISO('2014-W02-7');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 12));
      });
      it('parses YYYYWwwD', function () {
        var result = parseISO('2014W027');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 12));
      });
      it('correctly handles years in which 4 January is Sunday', function () {
        var result = parseISO('2009-W01-1');
        assert.deepStrictEqual(result, new Date(2008, 11
        /* Dec */
        , 29));
      });
    });
    describe('ordinal dates', function () {
      it('parses YYYY-DDD', function () {
        var result = parseISO('2014-026');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 26));
      });
      it('parses YYYYDDD', function () {
        var result = parseISO('2014026');
        assert.deepStrictEqual(result, new Date(2014, 0
        /* Jan */
        , 26));
      });
    });
    describe('date and time combined', function () {
      it('parses YYYY-MM-DDThh:mm', function () {
        var result = parseISO('2014-02-11T11:30');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11, 11, 30));
      });
      it('parses YYYY-MM-DDThhmm', function () {
        var result = parseISO('2014-02-11T1130');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11, 11, 30));
      });
    });
    describe('extended century representation', function () {
      it('parses century 101 BC - 2 BC', function () {
        var result = parseISO('-0001');
        var date = new Date(0);
        date.setFullYear(-100, 0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        assert.deepStrictEqual(result, date);
      });
      it('parses century 1 BC - 99 AD', function () {
        var result = parseISO('00');
        var date = new Date(0);
        date.setFullYear(0, 0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        assert.deepStrictEqual(result, date);
      });
      it('parses centuries after 9999 AD', function () {
        var result = parseISO('+0123');
        assert.deepStrictEqual(result, new Date(12300, 0
        /* Jan */
        , 1));
      });
      it('allows to specify the number of additional digits', function () {
        var result = parseISO('-20', {
          additionalDigits: 0
        });
        var date = new Date(0);
        date.setFullYear(-2000, 0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        assert.deepStrictEqual(result, date);
      });
    });
    describe('extended year representation', function () {
      it('correctly parses years from 1 AD to 99 AD', function () {
        var result = parseISO('0095-07-02');
        var date = new Date(0);
        date.setFullYear(95, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        assert.deepStrictEqual(result, date);
      });
      it('parses years after 9999 AD', function () {
        var result = parseISO('+012345-07-02');
        assert.deepStrictEqual(result, new Date(12345, 6
        /* Jul */
        , 2));
      });
      it('allows to specify the number of additional digits', function () {
        var result = parseISO('+12340702', {
          additionalDigits: 0
        });
        assert.deepStrictEqual(result, new Date(1234, 6
        /* Jul */
        , 2));
      });
      it('parses year 1 BC', function () {
        var result = parseISO('0000-07-02');
        var date = new Date(0);
        date.setFullYear(0, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        assert.deepStrictEqual(result, date);
      });
      it('parses years less than 1 BC', function () {
        var result = parseISO('-000001-07-02');
        var date = new Date(0);
        date.setFullYear(-1, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        assert.deepStrictEqual(result, date);
      });
    });
    describe('float time', function () {
      it('parses float hours', function () {
        var result = parseISO('2014-02-11T11.5');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11, 11, 30));
      });
      it('parses float minutes', function () {
        var result = parseISO('2014-02-11T11:30.5');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11, 11, 30, 30));
      });
      it('parses float seconds', function () {
        var result = parseISO('2014-02-11T11:30:30.768');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11, 11, 30, 30, 768));
      });
      it('parses , as decimal mark', function () {
        var result = parseISO('2014-02-11T11,5');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 11, 11, 30));
      });
    });
    describe('timezones', function () {
      describe('when the date and the time are specified', function () {
        it('parses Z', function () {
          var result = parseISO('2014-10-25T06:46:20Z');
          assert.deepStrictEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });
        it('parses ±hh:mm', function () {
          var result = parseISO('2014-10-25T13:46:20+07:00');
          assert.deepStrictEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });
        it('parses ±hhmm', function () {
          var result = parseISO('2014-10-25T03:46:20-0300');
          assert.deepStrictEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });
        it('parses ±hh', function () {
          var result = parseISO('2014-10-25T13:46:20+07');
          assert.deepStrictEqual(result, new Date('2014-10-25T13:46:20+07:00'));
        });
      });
      describe('when the year and the month are specified', function () {
        it('sets timezone correctly on yyyy-MMZ format', function () {
          var result = parseISO('2012-01Z');
          assert.deepStrictEqual(result, new Date('2012-01-01T00:00:00+00:00'));
        });
      });
    });
    describe('failure', function () {
      it('returns `Invalid Date` if the string is not an ISO formatted date', function () {
        var result = parseISO(new Date(2014, 8
        /* Sep */
        , 1, 11).toString());
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
  });
  describe('validation', function () {
    describe('months', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = parseISO('2014-00');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
    describe('weeks', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = parseISO('2014-W00');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 54th week', function () {
        var result = parseISO('2014-W54');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
    describe('calendar dates', function () {
      it('returns `Invalid Date` for invalid day of the month', function () {
        var result = parseISO('2012-02-30');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 29th of February of non-leap year', function () {
        var result = parseISO('2014-02-29');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('parses 29th of February of leap year', function () {
        var result = parseISO('2012-02-29');
        assert.deepStrictEqual(result, new Date(2012, 1,
        /* Feb */
        29));
      });
    });
    describe('week dates', function () {
      it('returns `Invalid Date` for invalid day of the week', function () {
        var result = parseISO('2014-W02-0');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
    describe('ordinal dates', function () {
      it('returns `Invalid Date` for invalid day of the year', function () {
        var result = parseISO('2012-000');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 366th day of non-leap year', function () {
        var result = parseISO('2014-366');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('parses 366th day of leap year', function () {
        var result = parseISO('2012-366');
        assert.deepStrictEqual(result, new Date(2012, 11,
        /* Dec */
        31));
      });
    });
    describe('date', function () {
      it('returns `Invalid Date` when it contains spaces after the date', function () {
        var result = parseISO('2014-02-11  basketball');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
    describe('time', function () {
      it('parses 24:00 as midnight of the next day', function () {
        var result = parseISO('2014-02-11T24:00');
        assert.deepStrictEqual(result, new Date(2014, 1
        /* Feb */
        , 12, 0, 0));
      });
      it('returns `Invalid Date` for anything after 24:00', function () {
        var result = parseISO('2014-02-11T24:01');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid hours', function () {
        var result = parseISO('2014-02-11T25');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid minutes', function () {
        var result = parseISO('2014-02-11T21:60');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid seconds', function () {
        var result = parseISO('2014-02-11T21:59:60');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid time', function () {
        var result = parseISO('2014-02-11T21:basketball');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
      it('returns `Invalid Date` when it contains spaces after the time', function () {
        var result = parseISO('2014-02-11T21:59:00  basketball');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
    describe('timezones', function () {
      it('returns `Invalid Date` for invalid timezone minutes', function () {
        var result = parseISO('2014-02-11T21:35:45+04:60');
        assert(result instanceof Date);
        assert(isNaN(result.getTime()));
      });
    });
  });
  describe('invalid argument', function () {
    it('returns Invalid Date if argument is non-date string', function () {
      var result = parseISO('abc');
      assert(result instanceof Date);
      assert(isNaN(result.getTime()));
    });
    it('returns Invalid Date if argument is non-date string containing a colon', function () {
      var result = parseISO('00:00');
      assert(result instanceof Date);
      assert(isNaN(result.getTime()));
    });
  });
});