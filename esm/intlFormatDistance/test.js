/* eslint-env mocha */
import assert from 'assert';
import intlFormatDistance from "./index.js";
describe('intlFormatDistance', function () {
  describe('with default values', function () {
    describe('works with same dates', function () {
      it('outputs `now`', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 0));
        assert(result === 'now');
      });
    });
    describe('works with single second', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 1), new Date(1986, 3, 5, 10, 30, 0));
        assert(result === 'in 1 second');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 1));
        assert(result === '1 second ago');
      });
    });
    describe('works with multiple seconds', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 59), new Date(1986, 3, 5, 10, 30, 0));
        assert(result === 'in 59 seconds');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 59));
        assert(result === '59 seconds ago');
      });
    });
    describe('works with single minute', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 59), new Date(1986, 3, 5, 10, 29, 59));
        assert(result === 'in 1 minute');
      });
      it('works with future with over a minute', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 10, 28, 10));
        assert(result === 'in 1 minute');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 29, 59), new Date(1986, 3, 5, 10, 30, 59));
        assert(result === '1 minute ago');
      });
      it('works with past with over a minute', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 28, 10), new Date(1986, 3, 5, 10, 30));
        assert(result === '1 minute ago');
      });
    });
    describe('works with multiple minutes', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 10, 28));
        assert(result === 'in 2 minutes');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 28), new Date(1986, 3, 5, 10, 30));
        assert(result === '2 minutes ago');
      });
    });
    describe('works with 60 seconds', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 4, 11, 30, 0), new Date(1986, 3, 4, 10, 30, 0));
        assert(result === 'in 1 hour');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 11, 30, 0));
        assert(result === '1 hour ago');
      });
    });
    describe('works with single hour', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10), new Date(1986, 3, 5, 9));
        assert(result === 'in 1 hour');
      });
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 9));
        assert(result === 'in 1 hour');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 9), new Date(1986, 3, 5, 10));
        assert(result === '1 hour ago');
      });
      it('works with past with over an hour', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 9), new Date(1986, 3, 5, 10, 30));
        assert(result === '1 hour ago');
      });
    });
    describe('works with multiple hours', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10), new Date(1986, 3, 5, 8));
        assert(result === 'in 2 hours');
      });
      it('works with future with extra minutes', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 8));
        assert(result === 'in 2 hours');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 8), new Date(1986, 3, 5, 10));
        assert(result === '2 hours ago');
      });
      it('works with past with extra minutes', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 8), new Date(1986, 3, 5, 10));
        assert(result === '2 hours ago');
      });
    });
    describe('works with single day', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 6, 22), new Date(1986, 3, 5, 22));
        assert(result === 'tomorrow');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 22), new Date(1986, 3, 6, 22));
        assert(result === 'yesterday');
      });
      it('works with past with an extra hour', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 22), new Date(1986, 3, 6, 22, 5));
        assert(result === 'yesterday');
      });
    });
    describe('works with multiple days', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 6, 22), new Date(1986, 3, 4, 22));
        assert(result === 'in 2 days');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 4, 22), new Date(1986, 3, 6, 22));
        assert(result === '2 days ago');
      });
    });
    describe('works with single week', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 10, 22), new Date(1986, 3, 3, 22));
        assert(result === 'next week');
      });
      it('works with future with more than a week', function () {
        var result = intlFormatDistance(new Date(1986, 3, 11, 22), new Date(1986, 3, 3, 22));
        assert(result === 'next week');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 3, 22), new Date(1986, 3, 10, 22));
        assert(result === 'last week');
      });
      it('works with past with more than a week', function () {
        var result = intlFormatDistance(new Date(1986, 3, 3, 22), new Date(1986, 3, 11, 22));
        assert(result === 'last week');
      });
    });
    describe('works with multiple weeks', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 3, 15), new Date(1986, 3, 1));
        assert(result === 'in 2 weeks');
      });
      it('works with future with more than 2 weeks', function () {
        var result = intlFormatDistance(new Date(1986, 3, 17), new Date(1986, 3, 1));
        assert(result === 'in 2 weeks');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 1), new Date(1986, 3, 15));
        assert(result === '2 weeks ago');
      });
      it('works with past with more than 2 weeks', function () {
        var result = intlFormatDistance(new Date(1986, 3, 1), new Date(1986, 3, 17));
        assert(result === '2 weeks ago');
      });
    });
    describe('works with single month', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 4, 2), new Date(1986, 3, 1));
        assert(result === 'next month');
      });
      it('works with future with more than a month', function () {
        var result = intlFormatDistance(new Date(1986, 4, 22), new Date(1986, 3, 1));
        assert(result === 'next month');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 3, 1), new Date(1986, 4, 2));
        assert(result === 'last month');
      });
      it('works with past with more than a month', function () {
        var result = intlFormatDistance(new Date(1986, 3, 1), new Date(1986, 4, 22));
        assert(result === 'last month');
      });
    });
    describe('works with single quarter', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 5, 2), new Date(1986, 1, 1));
        assert(result === 'next quarter');
      });
      it('works with future with more than a quarter', function () {
        var result = intlFormatDistance(new Date(1986, 5, 22), new Date(1986, 1, 1));
        assert(result === 'next quarter');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1986, 5, 2));
        assert(result === 'last quarter');
      });
      it('works with past with more than a quarter', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1986, 5, 22));
        assert(result === 'last quarter');
      });
    });
    describe('works with multiple quarters', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1986, 6, 2), new Date(1986, 1, 1));
        assert(result === 'in 2 quarters');
      });
      it('works with future with more that X quarters', function () {
        var result = intlFormatDistance(new Date(1986, 6, 22), new Date(1986, 1, 1));
        assert(result === 'in 2 quarters');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1986, 6, 2));
        assert(result === '2 quarters ago');
      });
      it('works with past with more that X quarters', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1986, 6, 22));
        assert(result === '2 quarters ago');
      });
    });
    describe('works with single year', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1987, 1, 2), new Date(1986, 1, 1));
        assert(result === 'next year');
      });
      it('works with future with more that a year', function () {
        var result = intlFormatDistance(new Date(1987, 10, 2), new Date(1986, 1, 1));
        assert(result === 'next year');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1987, 1, 2));
        assert(result === 'last year');
      });
      it('works with past with more than a year', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1987, 10, 2));
        assert(result === 'last year');
      });
    });
    describe('works with multiple years', function () {
      it('works with future', function () {
        var result = intlFormatDistance(new Date(1988, 1, 1), new Date(1986, 1, 1));
        assert(result === 'in 2 years');
      });
      it('works with future with x years', function () {
        var result = intlFormatDistance(new Date(2088, 1, 1), new Date(1986, 1, 1));
        assert(result === 'in 102 years');
      });
      it('works with past', function () {
        var result = intlFormatDistance(new Date(1986, 1, 1), new Date(1988, 1, 1));
        assert(result === '2 years ago');
      });
      it('works with past with x years', function () {
        var result = intlFormatDistance(new Date(1988, 1, 1), new Date(2086, 1, 1));
        assert(result === '98 years ago');
      });
    });
  });
  describe('with options', function () {
    describe('unit option', function () {
      describe('seconds', function () {
        it('works with future with seconds', function () {
          var result = intlFormatDistance(new Date(1987, 3, 4, 10, 31, 30), new Date(1987, 3, 4, 10, 30, 0), {
            unit: 'second'
          });
          assert(result === 'in 90 seconds');
        });
        it('works with past with seconds', function () {
          var result = intlFormatDistance(new Date(1987, 3, 4, 10, 30, 0), new Date(1987, 3, 4, 10, 31, 30), {
            unit: 'second'
          });
          assert(result === '90 seconds ago');
        });
        it('works with future with quarters', function () {
          var result = intlFormatDistance(new Date(1987, 6, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
            unit: 'quarter'
          });
          assert(result === 'in 5 quarters');
        });
      });
      describe('minutes', function () {
        it('works with future', function () {
          var result = intlFormatDistance(new Date(1986, 3, 4, 11, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
            unit: 'minute'
          });
          assert(result === 'in 60 minutes');
        });
        it('works with the past', function () {
          var result = intlFormatDistance(new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 11, 30, 0), {
            unit: 'minute'
          });
          assert(result === '60 minutes ago');
        });
      });
      describe('hours', function () {
        it('works the future', function () {
          var result = intlFormatDistance(new Date(1986, 3, 4, 11, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
            unit: 'hour'
          });
          assert(result === 'in 1 hour');
        });
        it('works with the past', function () {
          var result = intlFormatDistance(new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 11, 30, 0), {
            unit: 'hour'
          });
          assert(result === '1 hour ago');
        });
      });
      describe('single day', function () {
        it('works with the future', function () {
          var result = intlFormatDistance(new Date(1987, 3, 4, 11, 30, 0), new Date(1987, 3, 4, 10, 30, 0), {
            unit: 'day'
          });
          assert(result === 'today');
        });
        it('works with the past', function () {
          var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0));
          assert(result === 'tomorrow');
        });
      });
      describe('multiple days', function () {
        it('works with the future', function () {
          var result = intlFormatDistance(new Date(1987, 3, 5, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
            unit: 'day'
          });
          assert(result === 'in 366 days');
        });
        it('works with the past', function () {
          var result = intlFormatDistance(new Date(1986, 3, 4, 10, 30, 0), new Date(1987, 3, 5, 10, 30, 0), {
            unit: 'day'
          });
          assert(result === '366 days ago');
        });
      });
      describe('single weeks', function () {
        it('works with the future', function () {
          var result = intlFormatDistance(new Date(1987, 3, 11, 10, 30, 0), new Date(1987, 3, 4, 10, 30, 0), {
            unit: 'week'
          });
          assert(result === 'next week');
        });
        it('works with the past', function () {
          var result = intlFormatDistance(new Date(1987, 3, 4, 10, 30, 0), new Date(1987, 3, 11, 10, 30, 0), {
            unit: 'week'
          });
          assert(result === 'last week');
        });
      });
      describe('multiple weeks', function () {
        it('works with the future', function () {
          var result = intlFormatDistance(new Date(1987, 3, 6, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
            unit: 'week'
          });
          assert(result === 'in 53 weeks');
        });
        it('works with the past', function () {
          var result = intlFormatDistance(new Date(1986, 3, 4, 10, 30, 0), new Date(1987, 3, 6, 10, 30, 0), {
            unit: 'week'
          });
          assert(result === '53 weeks ago');
        });
      });
    });
    describe('numeric option', function () {
      describe('works with weeks', function () {
        it('works with past', function () {
          var result = intlFormatDistance(new Date(1986, 3, 3, 22), new Date(1986, 3, 10, 22), {
            numeric: 'always'
          });
          assert(result === '1 week ago');
        });
        it('works with future', function () {
          var result = intlFormatDistance(new Date(1986, 3, 10, 22), new Date(1986, 3, 3, 22), {
            numeric: 'always'
          });
          assert(result === 'in 1 week');
        });
      });
      it('works with days', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
          numeric: 'always'
        });
        assert(result === 'in 1 day');
      });
      it('works with the same dates', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 0), {
          numeric: 'auto'
        });
        assert(result === 'now');
      });
    });
    describe('locale option', function () {
      describe('locale', function () {
        it('allows to set Spanish locale', function () {
          var result = intlFormatDistance(new Date(1986, 4, 4, 10, 30, 0), new Date(1985, 4, 4, 10, 30, 0), {
            locale: 'es'
          });
          assert(result === 'el próximo año');
        });
      });
    });
    describe('style option', function () {
      it('works with years', function () {
        var result = intlFormatDistance(new Date(1986, 4, 4, 10, 30, 0), new Date(1985, 4, 4, 10, 30, 0), {
          style: 'long'
        });
        assert(result === 'next year');
      });
    });
    describe('unit and locale options', function () {
      it('works with multiple options', function () {
        var result = intlFormatDistance(new Date(1986, 3, 5, 11, 30, 0), new Date(1986, 3, 5, 10, 30, 0), {
          unit: 'minute',
          locale: 'de'
        });
        assert(result === 'in 60 Minuten');
      });
    });
    describe('edge cases', function () {
      it('falls back to { numeric: always }', function () {
        var result = intlFormatDistance(new Date(1985, 4, 5, 10, 30, 0), new Date(1985, 4, 4, 10, 30, 0), {
          style: 'long',
          numeric: 'auto'
        });
        assert(result === 'tomorrow');
      });
      it('handles dates before 100 AD', function () {
        var result = intlFormatDistance(new Date(1, 3, 4, 11, 30, 0), new Date(1, 3, 4, 10, 30, 0), {
          unit: 'minute'
        });
        assert(result === 'in 60 minutes');
      });
    });
    describe('errors', function () {
      it('checks the first date', function () {
        assert.throws(intlFormatDistance.bind(null, new Date(NaN), new Date(1986, 3, 4, 10, 30, 0)), RangeError);
      });
      it('checks the second date', function () {
        assert.throws(intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(NaN)), RangeError);
      });
      it('checks both dates', function () {
        assert.throws(intlFormatDistance.bind(null, new Date(NaN), new Date(NaN)), RangeError);
      });
      it('checks unit', function () {
        assert.throws( // @ts-ignore: the value doesnt match one of the Unit values from '../types.ts'
        intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
          unit: 'wrongValue'
        }), RangeError);
      });
      it('checks locale', function () {
        assert.throws(intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
          locale: 'wrongValue'
        }), RangeError);
      });
      it('checks localeMatcher', function () {
        assert.throws( // @ts-expect-error
        intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
          localeMatcher: 'wrongValue'
        }), RangeError);
      });
      it('checks numeric', function () {
        assert.throws( // @ts-expect-error
        intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
          numeric: 'wrongValue'
        }), RangeError);
      });
      it('checks style', function () {
        assert.throws( // @ts-expect-error
        intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), {
          style: 'wrongValue'
        }), RangeError);
      });
    });
  });
});