"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('format', function () {
  var date = new Date(1986, 3
  /* Apr */
  , 4, 10, 32, 55, 123);
  var offset = date.getTimezoneOffset();
  var absoluteOffset = Math.abs(offset);
  var hours = Math.floor(absoluteOffset / 60);
  var hoursLeadingZero = hours < 10 ? '0' : '';
  var minutes = absoluteOffset % 60;
  var minutesLeadingZero = minutes < 10 ? '0' : '';
  var sign = offset > 0 ? '-' : '+';
  var timezone = sign + hoursLeadingZero + hours + ':' + minutesLeadingZero + minutes;
  var timezoneShort = timezone.replace(':', '');
  var timezoneWithOptionalMinutesShort = minutes === 0 ? sign + hoursLeadingZero + hours : timezoneShort;
  var timezoneWithZ = offset === 0 ? 'Z' : timezone;
  var timezoneWithZShort = offset === 0 ? 'Z' : timezoneShort;
  var timezoneWithOptionalMinutesAndZShort = offset === 0 ? 'Z' : timezoneWithOptionalMinutesShort;
  var timezoneGMTShort = minutes === 0 ? 'GMT' + sign + hours : 'GMT' + sign + hours + ':' + minutesLeadingZero + minutes;
  var timezoneGMT = 'GMT' + timezone;
  var timestamp = date.getTime().toString();
  var secondsTimestamp = Math.floor(date.getTime() / 1000).toString();
  it('accepts a timestamp', function () {
    var date = new Date(2014, 3, 4).getTime();
    (0, _assert.default)((0, _index.default)(date, 'yyyy-MM-dd') === '2014-04-04');
  });
  it('escapes characters between the single quote characters', function () {
    var result = (0, _index.default)(date, "'yyyy-'MM-dd'THH:mm:ss.SSSX' yyyy-'MM-dd'");
    (0, _assert.default)(result === 'yyyy-04-04THH:mm:ss.SSSX 1986-MM-dd');
  });
  it('two single quote characters are transformed into a "real" single quote', function () {
    var date = new Date(2014, 3, 4, 5);
    (0, _assert.default)((0, _index.default)(date, "''h 'o''clock'''") === "'5 o'clock'");
  });
  it('accepts new line charactor', function () {
    var date = new Date(2014, 3, 4, 5);

    _assert.default.strictEqual((0, _index.default)(date, "yyyy-MM-dd'\n'HH:mm:ss"), '2014-04-04\n05:00:00');
  });
  describe('ordinal numbers', function () {
    it('ordinal day of an ordinal month', function () {
      var result = (0, _index.default)(date, "do 'day of the' Mo 'month of' yyyy");
      (0, _assert.default)(result === '4th day of the 4th month of 1986');
    });
    it('should return a correct ordinal number', function () {
      var result = [];

      for (var i = 1; i <= 31; i++) {
        result.push((0, _index.default)(new Date(2015, 0, i), 'do'));
      }

      var expected = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

      _assert.default.deepStrictEqual(result, expected);
    });
  });
  it('era', function () {
    var result = (0, _index.default)(date, 'G GG GGG GGGG GGGGG');
    (0, _assert.default)(result === 'AD AD AD Anno Domini A');
    var bcDate = new Date();
    bcDate.setFullYear(-1, 0
    /* Jan */
    , 1);
    var bcResult = (0, _index.default)(bcDate, 'G GG GGG GGGG GGGGG');
    (0, _assert.default)(bcResult === 'BC BC BC Before Christ B');
  });
  describe('year', function () {
    describe('regular year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'y yo yy yyy yyyy yyyyy');
        (0, _assert.default)(result === '1986 1986th 86 1986 1986 01986');
      });
      it('1 BC formats as 1', function () {
        var date = new Date(0);
        date.setFullYear(0, 0
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
      it('2 BC formats as 2nd', function () {
        var date = new Date();
        date.setFullYear(-1, 0
        /* Jan */
        , 1);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'yo');
        (0, _assert.default)(result === '2nd');
      });
    });
    describe('local week-numbering year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'Y Yo YY YYY YYYY YYYYY', {
          useAdditionalWeekYearTokens: true
        });
        (0, _assert.default)(result === '1986 1986th 86 1986 1986 01986');
      });
      it('the first week of the next year', function () {
        var result = (0, _index.default)(new Date(2013, 11
        /* Dec */
        , 29), 'YYYY', {
          useAdditionalWeekYearTokens: true
        });
        (0, _assert.default)(result === '2014');
      });
      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
        var result = (0, _index.default)(new Date(2013, 11
        /* Dec */
        , 29), 'YYYY', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
          useAdditionalWeekYearTokens: true
        });
        (0, _assert.default)(result === '2013');
      });
      it('the first week of year', function () {
        var result = (0, _index.default)(new Date(2016, 0
        /* Jan */
        , 1), 'YYYY', {
          useAdditionalWeekYearTokens: true
        });
        (0, _assert.default)(result === '2016');
      });
      it('1 BC formats as 1', function () {
        var date = new Date(0);
        date.setFullYear(0, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'Y');
        (0, _assert.default)(result === '1');
      });
      it('2 BC formats as 2', function () {
        var date = new Date(0);
        date.setFullYear(-1, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'Y');
        (0, _assert.default)(result === '2');
      });
    });
    describe('ISO week-numbering year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'R RR RRR RRRR RRRRR');
        (0, _assert.default)(result === '1986 1986 1986 1986 01986');
      });
      it('the first week of the next year', function () {
        var result = (0, _index.default)(new Date(2013, 11
        /* Dec */
        , 30), 'RRRR');
        (0, _assert.default)(result === '2014');
      });
      it('the last week of the previous year', function () {
        var result = (0, _index.default)(new Date(2016, 0
        /* Jan */
        , 1), 'RRRR');
        (0, _assert.default)(result === '2015');
      });
      it('1 BC formats as 0', function () {
        var date = new Date(0);
        date.setFullYear(0, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'R');
        (0, _assert.default)(result === '0');
      });
      it('2 BC formats as -1', function () {
        var date = new Date(0);
        date.setFullYear(-1, 6
        /* Jul */
        , 2);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'R');
        (0, _assert.default)(result === '-1');
      });
    });
    describe('extended year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'u uu uuu uuuu uuuuu');
        (0, _assert.default)(result === '1986 1986 1986 1986 01986');
      });
      it('1 BC formats as 0', function () {
        var date = new Date(0);
        date.setFullYear(0, 0, 1);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'u');
        (0, _assert.default)(result === '0');
      });
      it('2 BC formats as -1', function () {
        var date = new Date(0);
        date.setFullYear(-1, 0, 1);
        date.setHours(0, 0, 0, 0);
        var result = (0, _index.default)(date, 'u');
        (0, _assert.default)(result === '-1');
      });
    });
  });
  describe('quarter', function () {
    it('formatting quarter', function () {
      var result = (0, _index.default)(date, 'Q Qo QQ QQQ QQQQ QQQQQ');
      (0, _assert.default)(result === '2 2nd 02 Q2 2nd quarter 2');
    });
    it('stand-alone quarter', function () {
      var result = (0, _index.default)(date, 'q qo qq qqq qqqq qqqqq');
      (0, _assert.default)(result === '2 2nd 02 Q2 2nd quarter 2');
    });
    it('returns a correct quarter for each month', function () {
      var result = [];

      for (var i = 0; i <= 11; i++) {
        result.push((0, _index.default)(new Date(1986, i, 1), 'Q'));
      }

      var expected = ['1', '1', '1', '2', '2', '2', '3', '3', '3', '4', '4', '4'];

      _assert.default.deepStrictEqual(result, expected);
    });
  });
  describe('month', function () {
    it('formatting month', function () {
      var result = (0, _index.default)(date, 'M Mo MM MMM MMMM MMMMM');
      (0, _assert.default)(result === '4 4th 04 Apr April A');
    });
    it('stand-alone month', function () {
      var result = (0, _index.default)(date, 'L Lo LL LLL LLLL LLLLL');
      (0, _assert.default)(result === '4 4th 04 Apr April A');
    });
  });
  describe('week', function () {
    describe('local week of year', function () {
      it('works as expected', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6);
        var result = (0, _index.default)(date, 'w wo ww');
        (0, _assert.default)(result === '15 15th 15');
      });
      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6);
        var result = (0, _index.default)(date, 'w wo ww', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4
        });
        (0, _assert.default)(result === '14 14th 14');
      });
    });
    it('ISO week of year', function () {
      var date = new Date(1986, 3
      /* Apr */
      , 6);
      var result = (0, _index.default)(date, 'I Io II');
      (0, _assert.default)(result === '14 14th 14');
    });
  });
  describe('day', function () {
    it('date', function () {
      var result = (0, _index.default)(date, 'd do dd');
      (0, _assert.default)(result === '4 4th 04');
    });
    describe('day of year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'D Do DD DDD DDDDD', {
          useAdditionalDayOfYearTokens: true
        });
        (0, _assert.default)(result === '94 94th 94 094 00094');
      });
      it('returns a correct day number for the last day of a leap year', function () {
        var result = (0, _index.default)(new Date(1992, 11
        /* Dec */
        , 31, 23, 59, 59, 999), 'D', {
          useAdditionalDayOfYearTokens: true
        });
        (0, _assert.default)(result === '366');
      });
    });
  });
  describe('week day', function () {
    describe('day of week', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'E EE EEE EEEE EEEEE EEEEEE');
        (0, _assert.default)(result === 'Fri Fri Fri Friday F Fr');
      });
    });
    describe('ISO day of week', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'i io ii iii iiii iiiii iiiiii');
        (0, _assert.default)(result === '5 5th 05 Fri Friday F Fr');
      });
      it('returns a correct day of an ISO week', function () {
        var result = [];

        for (var i = 1; i <= 7; i++) {
          result.push((0, _index.default)(new Date(1986, 8
          /* Sep */
          , i), 'i'));
        }

        var expected = ['1', '2', '3', '4', '5', '6', '7'];

        _assert.default.deepStrictEqual(result, expected);
      });
    });
    describe('formatting day of week', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'e eo ee eee eeee eeeee eeeeee');
        (0, _assert.default)(result === '6 6th 06 Fri Friday F Fr');
      });
      it('by default, 1 is Sunday, 2 is Monday, ...', function () {
        var result = [];

        for (var i = 7; i <= 13; i++) {
          result.push((0, _index.default)(new Date(1986, 8
          /* Sep */
          , i), 'e'));
        }

        var expected = ['1', '2', '3', '4', '5', '6', '7'];

        _assert.default.deepStrictEqual(result, expected);
      });
      it('allows to specify which day is the first day of the week', function () {
        var result = [];

        for (var i = 1; i <= 7; i++) {
          result.push((0, _index.default)(new Date(1986, 8
          /* Sep */
          , i), 'e', {
            weekStartsOn: 1
          }));
        }

        var expected = ['1', '2', '3', '4', '5', '6', '7'];

        _assert.default.deepStrictEqual(result, expected);
      });
    });
    describe('stand-alone day of week', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'c co cc ccc cccc ccccc cccccc');
        (0, _assert.default)(result === '6 6th 06 Fri Friday F Fr');
      });
      it('by default, 1 is Sunday, 2 is Monday, ...', function () {
        var result = [];

        for (var i = 7; i <= 13; i++) {
          result.push((0, _index.default)(new Date(1986, 8
          /* Sep */
          , i), 'c'));
        }

        var expected = ['1', '2', '3', '4', '5', '6', '7'];

        _assert.default.deepStrictEqual(result, expected);
      });
      it('allows to specify which day is the first day of the week', function () {
        var result = [];

        for (var i = 1; i <= 7; i++) {
          result.push((0, _index.default)(new Date(1986, 8
          /* Sep */
          , i), 'c', {
            weekStartsOn: 1
          }));
        }

        var expected = ['1', '2', '3', '4', '5', '6', '7'];

        _assert.default.deepStrictEqual(result, expected);
      });
    });
  });
  describe('day period and hour', function () {
    it('hour [1-12]', function () {
      var result = (0, _index.default)(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'h ho hh');
      (0, _assert.default)(result === '12 12th 12');
    });
    it('hour [0-23]', function () {
      var result = (0, _index.default)(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'H Ho HH');
      (0, _assert.default)(result === '0 0th 00');
    });
    it('hour [0-11]', function () {
      var result = (0, _index.default)(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'K Ko KK');
      (0, _assert.default)(result === '0 0th 00');
    });
    it('hour [1-24]', function () {
      var result = (0, _index.default)(new Date(2018, 0
      /* Jan */
      , 1, 0, 0, 0, 0), 'k ko kk');
      (0, _assert.default)(result === '24 24th 24');
    });
    describe('AM, PM', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(new Date(2018, 0
        /* Jan */
        , 1, 0, 0, 0, 0), 'a aa aaa aaaa aaaaa');
        (0, _assert.default)(result === 'AM AM am a.m. a');
      });
      it('12 PM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 4, 12, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h H K k a') === '12 12 0 12 PM');
      });
      it('12 AM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 0, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h H K k a') === '12 0 0 24 AM');
      });
    });
    describe('AM, PM, noon, midnight', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(new Date(1986, 3
        /* Apr */
        , 6, 2, 0, 0, 900), 'b bb bbb bbbb bbbbb');
        (0, _assert.default)(result === 'AM AM am a.m. a');
        var pmResult = (0, _index.default)(new Date(1986, 3
        /* Apr */
        , 6, 13, 0, 0, 900), 'b bb bbb bbbb bbbbb');
        (0, _assert.default)(pmResult === 'PM PM pm p.m. p');
      });
      it('12 PM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 4, 12, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'b bb bbb bbbb bbbbb') === 'noon noon noon noon n');
      });
      it('12 AM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 0, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'b bb bbb bbbb bbbbb') === 'midnight midnight midnight midnight mi');
      });
    });
    describe('flexible day periods', function () {
      it('works as expected', function () {
        var result = (0, _index.default)(date, 'B, BB, BBB, BBBB, BBBBB');
        (0, _assert.default)(result === 'in the morning, in the morning, in the morning, in the morning, in the morning');
      });
      it('12 PM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 4, 12, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h B') === '12 in the afternoon');
      });
      it('5 PM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 17, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h B') === '5 in the evening');
      });
      it('12 AM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 0, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h B') === '12 at night');
      });
      it('4 AM', function () {
        var date = new Date(1986, 3
        /* Apr */
        , 6, 4, 0, 0, 900);
        (0, _assert.default)((0, _index.default)(date, 'h B') === '4 in the morning');
      });
    });
  });
  it('minute', function () {
    var result = (0, _index.default)(date, 'm mo mm');
    (0, _assert.default)(result === '32 32nd 32');
  });
  describe('second', function () {
    it('second', function () {
      var result = (0, _index.default)(date, 's so ss');
      (0, _assert.default)(result === '55 55th 55');
    });
    it('fractional seconds', function () {
      var result = (0, _index.default)(date, 'S SS SSS SSSS');
      (0, _assert.default)(result === '1 12 123 1230');
    });
  });
  describe('time zone', function () {
    it('ISO-8601 with Z', function () {
      var result = (0, _index.default)(date, 'X XX XXX XXXX XXXXX');
      var expectedResult = [timezoneWithOptionalMinutesAndZShort, timezoneWithZShort, timezoneWithZ, timezoneWithZShort, timezoneWithZ].join(' ');
      (0, _assert.default)(result === expectedResult);

      var getTimezoneOffsetStub = _sinon.default.stub(Date.prototype, 'getTimezoneOffset');

      getTimezoneOffsetStub.returns(0);
      var resultZeroOffset = (0, _index.default)(date, 'X XX XXX XXXX XXXXX');
      (0, _assert.default)(resultZeroOffset === 'Z Z Z Z Z');
      getTimezoneOffsetStub.returns(480);
      var resultNegativeOffset = (0, _index.default)(date, 'X XX XXX XXXX XXXXX');
      (0, _assert.default)(resultNegativeOffset === '-08 -0800 -08:00 -0800 -08:00');
      getTimezoneOffsetStub.returns(450);
      var resultNegative30Offset = (0, _index.default)(date, 'X XX XXX XXXX XXXXX');
      (0, _assert.default)(resultNegative30Offset === '-0730 -0730 -07:30 -0730 -07:30');
      getTimezoneOffsetStub.restore();
    });
    it('ISO-8601 without Z', function () {
      var result = (0, _index.default)(date, 'x xx xxx xxxx xxxxx');
      var expectedResult = [timezoneWithOptionalMinutesShort, timezoneShort, timezone, timezoneShort, timezone].join(' ');
      (0, _assert.default)(result === expectedResult);
    });
    it('GMT', function () {
      var result = (0, _index.default)(date, 'O OO OOO OOOO');
      var expectedResult = [timezoneGMTShort, timezoneGMTShort, timezoneGMTShort, timezoneGMT].join(' ');
      (0, _assert.default)(result === expectedResult);

      var getTimezoneOffsetStub = _sinon.default.stub(Date.prototype, 'getTimezoneOffset');

      getTimezoneOffsetStub.returns(480);
      var resultNegativeOffset = (0, _index.default)(date, 'O OO OOO OOOO');
      (0, _assert.default)(resultNegativeOffset === 'GMT-8 GMT-8 GMT-8 GMT-08:00');
      getTimezoneOffsetStub.returns(450);
      var resultNegative30Offset = (0, _index.default)(date, 'O OO OOO OOOO');
      (0, _assert.default)(resultNegative30Offset === 'GMT-7:30 GMT-7:30 GMT-7:30 GMT-07:30');
      getTimezoneOffsetStub.restore();
    });
    it('Specific non-location', function () {
      var result = (0, _index.default)(date, 'z zz zzz zzzz');
      var expectedResult = [timezoneGMTShort, timezoneGMTShort, timezoneGMTShort, timezoneGMT].join(' ');
      (0, _assert.default)(result === expectedResult);
    });
  });
  describe('timestamp', function () {
    it('seconds timestamp', function () {
      var result = (0, _index.default)(date, 't');
      (0, _assert.default)(result === secondsTimestamp);
    });
    it('milliseconds timestamp', function () {
      var result = (0, _index.default)(date, 'T');
      (0, _assert.default)(result === timestamp);
    });
  });
  describe('long format', function () {
    it('short date', function () {
      var result = (0, _index.default)(date, 'P');
      (0, _assert.default)(result === '04/04/1986');
    });
    it('medium date', function () {
      var result = (0, _index.default)(date, 'PP');
      (0, _assert.default)(result === 'Apr 4, 1986');
    });
    it('long date', function () {
      var result = (0, _index.default)(date, 'PPP');
      (0, _assert.default)(result === 'April 4th, 1986');
    });
    it('full date', function () {
      var result = (0, _index.default)(date, 'PPPP');
      (0, _assert.default)(result === 'Friday, April 4th, 1986');
    });
    it('short time', function () {
      var result = (0, _index.default)(date, 'p');
      (0, _assert.default)(result === '10:32 AM');
    });
    it('medium time', function () {
      var result = (0, _index.default)(date, 'pp');
      (0, _assert.default)(result === '10:32:55 AM');
    });
    it('long time', function () {
      var result = (0, _index.default)(date, 'ppp');
      (0, _assert.default)(result === '10:32:55 AM ' + timezoneGMTShort);
    });
    it('full time', function () {
      var result = (0, _index.default)(date, 'pppp');
      (0, _assert.default)(result === '10:32:55 AM ' + timezoneGMT);
    });
    it('short date + time', function () {
      var result = (0, _index.default)(date, 'Pp');
      (0, _assert.default)(result === '04/04/1986, 10:32 AM');
    });
    it('medium date + time', function () {
      var result = (0, _index.default)(date, 'PPpp');
      (0, _assert.default)(result === 'Apr 4, 1986, 10:32:55 AM');
    });
    it('long date + time', function () {
      var result = (0, _index.default)(date, 'PPPppp');
      (0, _assert.default)(result === 'April 4th, 1986 at 10:32:55 AM ' + timezoneGMTShort);
    });
    it('full date + time', function () {
      var result = (0, _index.default)(date, 'PPPPpppp');
      (0, _assert.default)(result === 'Friday, April 4th, 1986 at 10:32:55 AM ' + timezoneGMT);
    });
    it('allows arbitrary combination of date and time', function () {
      var result = (0, _index.default)(date, 'Ppppp');
      (0, _assert.default)(result === '04/04/1986, 10:32:55 AM ' + timezoneGMT);
    });
  });
  describe('edge cases', function () {
    it('throws RangeError if the time value is invalid', function () {
      _assert.default.throws(_index.default.bind(null, new Date(NaN), 'MMMM d, yyyy'), RangeError);
    });
    it('handles dates before 100 AD', function () {
      var initialDate = new Date(0);
      initialDate.setFullYear(7, 11
      /* Dec */
      , 31);
      initialDate.setHours(0, 0, 0, 0);
      (0, _assert.default)((0, _index.default)(initialDate, 'Y ww i') === '8 01 1');
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
            return "'It' MMMM!";
          }
        }
      };
      var result = (0, _index.default)(date, 'PPPP', {
        // @ts-expect-error
        locale: customLocale
      });
      (0, _assert.default)(result === 'It works!');
    });
    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      var customLocale = {
        formatLong: {}
      };

      var block = function block() {
        return (0, _index.default)(date, 'yyyy-MM-dd', {
          // @ts-expect-error
          locale: customLocale
        });
      };

      _assert.default.throws(block, RangeError);
    });
    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      var customLocale = {
        localize: {}
      };

      var block = function block() {
        return (0, _index.default)(date, 'yyyy-MM-dd', {
          // @ts-expect-error
          locale: customLocale
        });
      };

      _assert.default.throws(block, RangeError);
    });
  });
  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
    _assert.default.throws(_index.default.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError);
  });
  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', function () {
    it('throws an error if D token is used', function () {
      try {
        _index.default.bind(null, date, 'yyyy-MM-D');
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `d` instead of `D`'));
      }
    });
    it('allows D token if useAdditionalDayOfYearTokens is set to true', function () {
      var result = (0, _index.default)(date, 'yyyy-MM-D', {
        useAdditionalDayOfYearTokens: true
      });

      _assert.default.deepStrictEqual(result, '1986-04-94');
    });
    it('throws an error if DD token is used', function () {
      try {
        _index.default.bind(null, date, 'yyyy-MM-DD');
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `dd` instead of `DD`'));
      }
    });
    it('allows DD token if useAdditionalDayOfYearTokens is set to true', function () {
      var result = (0, _index.default)(date, 'yyyy-MM-DD', {
        useAdditionalDayOfYearTokens: true
      });

      _assert.default.deepStrictEqual(result, '1986-04-94');
    });
    it('throws an error if YY token is used', function () {
      try {
        _index.default.bind(null, date, 'YY-MM-dd');
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `yy` instead of `YY`'));
      }
    });
    it('allows YY token if useAdditionalWeekYearTokens is set to true', function () {
      var result = (0, _index.default)(date, 'YY-MM-dd', {
        useAdditionalWeekYearTokens: true
      });

      _assert.default.deepStrictEqual(result, '86-04-04');
    });
    it('throws an error if YYYY token is used', function () {
      try {
        _index.default.bind(null, date, 'YYYY-MM-dd');
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `yyyy` instead of `YYYY`'));
      }
    });
    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', function () {
      var result = (0, _index.default)(date, 'YYYY-MM-dd', {
        useAdditionalWeekYearTokens: true
      });

      _assert.default.deepStrictEqual(result, '1986-04-04');
    });
  });
});