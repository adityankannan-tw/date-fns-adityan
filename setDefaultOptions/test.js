"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = require("../_lib/defaultOptions/index.js");

var _index3 = _interopRequireDefault(require("../locale/en-US/index.js"));

var _index4 = _interopRequireDefault(require("../locale/eo/index.js"));

var _index5 = _interopRequireDefault(require("../differenceInCalendarWeeks/index.js"));

var _index6 = _interopRequireDefault(require("../eachWeekOfInterval/index.js"));

var _index7 = _interopRequireDefault(require("../endOfWeek/index.js"));

var _index8 = _interopRequireDefault(require("../format/index.js"));

var _index9 = _interopRequireDefault(require("../formatDistance/index.js"));

var _index10 = _interopRequireDefault(require("../formatDistanceStrict/index.js"));

var _index11 = _interopRequireDefault(require("../formatDuration/index.js"));

var _index12 = _interopRequireDefault(require("../formatRelative/index.js"));

var _index13 = _interopRequireDefault(require("../getWeek/index.js"));

var _index14 = _interopRequireDefault(require("../getWeekOfMonth/index.js"));

var _index15 = _interopRequireDefault(require("../getWeeksInMonth/index.js"));

var _index16 = _interopRequireDefault(require("../getWeekYear/index.js"));

var _index17 = _interopRequireDefault(require("../isMatch/index.js"));

var _index18 = _interopRequireDefault(require("../isSameWeek/index.js"));

var _index19 = _interopRequireDefault(require("../lastDayOfWeek/index.js"));

var _index20 = _interopRequireDefault(require("../parse/index.js"));

var _index21 = _interopRequireDefault(require("../setDay/index.js"));

var _index22 = _interopRequireDefault(require("../setWeek/index.js"));

var _index23 = _interopRequireDefault(require("../setWeekYear/index.js"));

var _index24 = _interopRequireDefault(require("../startOfWeek/index.js"));

var _index25 = _interopRequireDefault(require("../startOfWeekYear/index.js"));

var _index26 = require("../_lib/test/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('setDefaultOptions', function () {
  afterEach(_index26.resetDefaultOptions);
  it('changes the internal `defaultOptions` object', function () {
    (0, _index.default)({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: _index4.default
    });

    _assert.default.deepStrictEqual((0, _index2.getDefaultOptions)(), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: _index4.default
    });
  });
  it('merges with previous `defaultOptions` calls', function () {
    (0, _index.default)({
      weekStartsOn: 1
    });
    (0, _index.default)({
      firstWeekContainsDate: 4
    });
    (0, _index.default)({
      locale: _index4.default
    });

    _assert.default.deepStrictEqual((0, _index2.getDefaultOptions)(), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: _index4.default
    });
  });
  it('setting an option to `undefined` deletes it', function () {
    (0, _index.default)({
      weekStartsOn: 1,
      firstWeekContainsDate: 4
    });
    (0, _index.default)({
      weekStartsOn: undefined
    });

    _assert.default.deepStrictEqual((0, _index2.getDefaultOptions)(), {
      firstWeekContainsDate: 4
    });
  });
  it('does not mutate the argument', function () {
    var argument = {
      weekStartsOn: 1
    };
    (0, _index.default)(argument);

    _assert.default.deepStrictEqual(argument, {
      weekStartsOn: 1
    });
  });
  describe('locale', function () {
    it('format', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index8.default)(new Date(2014, 0, 1), 'PPPpp'), 'January 1st, 2014 at 12:00:00 AM');

      (0, _index.default)({
        locale: _index4.default
      });

      _assert.default.deepStrictEqual((0, _index8.default)(new Date(2014, 0, 1), 'PPPpp'), '2014-januaro-01 00:00:00'); // Manually set `locale` take priority over `defaultOptions.locale`


      _assert.default.deepStrictEqual((0, _index8.default)(new Date(2014, 0, 1), 'PPPpp', {
        locale: _index3.default
      }), 'January 1st, 2014 at 12:00:00 AM');
    });
    it('formatDistance', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index9.default)(new Date(2014, 0, 1), new Date(2015, 0, 1)), 'about 1 year');

      (0, _index.default)({
        locale: _index4.default
      });

      _assert.default.deepStrictEqual((0, _index9.default)(new Date(2014, 0, 1), new Date(2015, 0, 1)), 'proksimume 1 jaro'); // Manually set `locale` take priority over `defaultOptions.locale`


      _assert.default.deepStrictEqual((0, _index9.default)(new Date(2014, 0, 1), new Date(2015, 0, 1), {
        locale: _index3.default
      }), 'about 1 year');
    });
    it('formatDistanceStrict', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index10.default)(new Date(2014, 0, 1), new Date(2015, 0, 1)), '1 year');

      (0, _index.default)({
        locale: _index4.default
      });

      _assert.default.deepStrictEqual((0, _index10.default)(new Date(2014, 0, 1), new Date(2015, 0, 1)), '1 jaro'); // Manually set `locale` take priority over `defaultOptions.locale`


      _assert.default.deepStrictEqual((0, _index10.default)(new Date(2014, 0, 1), new Date(2015, 0, 1), {
        locale: _index3.default
      }), '1 year');
    });
    it('formatDuration', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index11.default)({
        years: 1
      }), '1 year');

      (0, _index.default)({
        locale: _index4.default
      });

      _assert.default.deepStrictEqual((0, _index11.default)({
        years: 1
      }), '1 jaro'); // Manually set `locale` take priority over `defaultOptions.locale`


      _assert.default.deepStrictEqual((0, _index11.default)({
        years: 1
      }, {
        locale: _index3.default
      }), '1 year');
    });
    it('formatRelative', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index12.default)(new Date(2014, 0, 1), new Date(2014, 0, 2)), 'yesterday at 12:00 AM');

      (0, _index.default)({
        locale: _index4.default
      });

      _assert.default.deepStrictEqual((0, _index12.default)(new Date(2014, 0, 1), new Date(2014, 0, 2)), 'hieraŭ je 00:00'); // Manually set `locale` take priority over `defaultOptions.locale`


      _assert.default.deepStrictEqual((0, _index12.default)(new Date(2014, 0, 1), new Date(2014, 0, 2), {
        locale: _index3.default
      }), 'yesterday at 12:00 AM');
    });
    it('isMatch', function () {
      // For reference: not setting any options
      (0, _assert.default)((0, _index17.default)('January 1st, 2014 at 12:00:00 AM', 'PPPpp'));
      (0, _index.default)({
        locale: _index4.default
      });
      (0, _assert.default)((0, _index17.default)('2014-januaro-01 00:00:00', 'PPPpp')); // Manually set `locale` take priority over `defaultOptions.locale`

      (0, _assert.default)((0, _index17.default)('January 1st, 2014 at 12:00:00 AM', 'PPPpp', {
        locale: _index3.default
      }));
    });
    it('parse', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index20.default)('January 1st, 2014 at 12:00:00 AM', 'PPPpp', new Date()), new Date(2014, 0, 1));

      (0, _index.default)({
        locale: _index4.default
      });

      _assert.default.deepStrictEqual((0, _index20.default)('2014-januaro-01 00:00:00', 'PPPpp', new Date()), new Date(2014, 0, 1)); // Manually set `locale` take priority over `defaultOptions.locale`


      _assert.default.deepStrictEqual((0, _index20.default)('January 1st, 2014 at 12:00:00 AM', 'PPPpp', new Date(), {
        locale: _index3.default
      }), new Date(2014, 0, 1));
    });
  });
  describe('weekStartsOn', function () {
    it('differenceInCalendarWeeks', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index5.default)(new Date(2014, 6
      /* Jul */
      , 8, 18, 0), new Date(2014, 5
      /* Jun */
      , 29, 6, 0)), 1);

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.strictEqual((0, _index5.default)(new Date(2014, 6
      /* Jul */
      , 8, 18, 0), new Date(2014, 5
      /* Jun */
      , 29, 6, 0)), 2); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.strictEqual((0, _index5.default)(new Date(2014, 6
      /* Jul */
      , 8, 18, 0), new Date(2014, 5
      /* Jun */
      , 29, 6, 0), {
        weekStartsOn: 0
      }), 1);
    });
    it('eachWeekOfInterval', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index6.default)({
        start: new Date(2014, 9
        /* Oct */
        , 6),
        end: new Date(2014, 10
        /* Nov */
        , 23)
      }), [new Date(2014, 9
      /* Oct */
      , 5), new Date(2014, 9
      /* Oct */
      , 12), new Date(2014, 9
      /* Oct */
      , 19), new Date(2014, 9
      /* Oct */
      , 26), new Date(2014, 10
      /* Nov */
      , 2), new Date(2014, 10
      /* Nov */
      , 9), new Date(2014, 10
      /* Nov */
      , 16), new Date(2014, 10
      /* Nov */
      , 23)]);

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual((0, _index6.default)({
        start: new Date(2014, 9
        /* Oct */
        , 6, 6, 35),
        end: new Date(2014, 10
        /* Nov */
        , 25, 22, 15)
      }), [new Date(2014, 9
      /* Oct */
      , 6), new Date(2014, 9
      /* Oct */
      , 13), new Date(2014, 9
      /* Oct */
      , 20), new Date(2014, 9
      /* Oct */
      , 27), new Date(2014, 10
      /* Nov */
      , 3), new Date(2014, 10
      /* Nov */
      , 10), new Date(2014, 10
      /* Nov */
      , 17), new Date(2014, 10
      /* Nov */
      , 24)]); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.deepStrictEqual((0, _index6.default)({
        start: new Date(2014, 9
        /* Oct */
        , 6),
        end: new Date(2014, 10
        /* Nov */
        , 23)
      }, {
        weekStartsOn: 0
      }), [new Date(2014, 9
      /* Oct */
      , 5), new Date(2014, 9
      /* Oct */
      , 12), new Date(2014, 9
      /* Oct */
      , 19), new Date(2014, 9
      /* Oct */
      , 26), new Date(2014, 10
      /* Nov */
      , 2), new Date(2014, 10
      /* Nov */
      , 9), new Date(2014, 10
      /* Nov */
      , 16), new Date(2014, 10
      /* Nov */
      , 23)]);
    });
    it('endOfWeek', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index7.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0)), new Date(2014, 8
      /* Sep */
      , 6, 23, 59, 59, 999));

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual((0, _index7.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0)), new Date(2014, 8
      /* Sep */
      , 7, 23, 59, 59, 999)); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.deepStrictEqual((0, _index7.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0), {
        weekStartsOn: 0
      }), new Date(2014, 8
      /* Sep */
      , 6, 23, 59, 59, 999));
    });
    it('getWeekOfMonth', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index14.default)(new Date(2017, 10
      /* Nov */
      , 15)), 3);

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.strictEqual((0, _index14.default)(new Date(2017, 9
      /* Oct */
      , 31)), 6); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.strictEqual((0, _index14.default)(new Date(2017, 10
      /* Nov */
      , 15), {
        weekStartsOn: 0
      }), 3);
    });
    it('getWeeksInMonth', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index15.default)(new Date(2015, 1
      /* Feb */
      , 8, 18, 0)), 4);

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.strictEqual((0, _index15.default)(new Date(2015, 1
      /* Feb */
      , 8, 18, 0)), 5); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.strictEqual((0, _index15.default)(new Date(2015, 1
      /* Feb */
      , 8, 18, 0), {
        weekStartsOn: 0
      }), 4);
    });
    it('isSameWeek', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index18.default)(new Date(2014, 7
      /* Aug */
      , 31), new Date(2014, 8
      /* Sep */
      , 4)), true);

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.strictEqual((0, _index18.default)(new Date(2014, 7
      /* Aug */
      , 31), new Date(2014, 8
      /* Sep */
      , 4)), false); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.strictEqual((0, _index18.default)(new Date(2014, 7
      /* Aug */
      , 31), new Date(2014, 8
      /* Sep */
      , 4), {
        weekStartsOn: 0
      }), true);
    });
    it('lastDayOfWeek', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index19.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0)), new Date(2014, 8
      /* Sep */
      , 6));

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual((0, _index19.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0)), new Date(2014, 8
      /* Sep */
      , 7)); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.deepStrictEqual((0, _index19.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0), {
        weekStartsOn: 0
      }), new Date(2014, 8
      /* Sep */
      , 6));
    });
    it('setDay', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index21.default)(new Date(2014, 8
      /* Sep */
      , 1), 0), new Date(2014, 7
      /* Aug */
      , 31));

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual((0, _index21.default)(new Date(2014, 8
      /* Sep */
      , 1), 0), new Date(2014, 8
      /* Sep */
      , 7)); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.deepStrictEqual((0, _index21.default)(new Date(2014, 8
      /* Sep */
      , 1), 0, {
        weekStartsOn: 0
      }), new Date(2014, 7
      /* Aug */
      , 31));
    });
    it('startOfWeek', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index24.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0)), new Date(2014, 7
      /* Aug */
      , 31));

      (0, _index.default)({
        weekStartsOn: 1
      });

      _assert.default.deepStrictEqual((0, _index24.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0)), new Date(2014, 8
      /* Sep */
      , 1)); // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`


      _assert.default.deepStrictEqual((0, _index24.default)(new Date(2014, 8
      /* Sep */
      , 2, 11, 55, 0), {
        weekStartsOn: 0
      }), new Date(2014, 7
      /* Aug */
      , 31));
    });
  });
  describe('firstWeekContainsDate', function () {
    it('format', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index8.default)(new Date(1986, 3
      /* Apr */
      , 6), 'w wo ww'), '15 15th 15');

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.strictEqual((0, _index8.default)(new Date(1986, 3
      /* Apr */
      , 6), 'w wo ww'), '14 14th 14'); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.strictEqual((0, _index8.default)(new Date(1986, 3
      /* Apr */
      , 6), 'w wo ww', {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), '15 15th 15');
    });
    it('getWeek', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index13.default)(new Date(2005, 0
      /* Jan */
      , 2)), 2);

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.strictEqual((0, _index13.default)(new Date(2005, 0
      /* Jan */
      , 2)), 53); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.strictEqual((0, _index13.default)(new Date(2005, 0
      /* Jan */
      , 2), {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), 2);
    });
    it('getWeekYear', function () {
      // For reference: not setting any options
      _assert.default.strictEqual((0, _index16.default)(new Date(2004, 11
      /* Dec */
      , 26)), 2005);

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.strictEqual((0, _index16.default)(new Date(2004, 11
      /* Dec */
      , 26)), 2004); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.strictEqual((0, _index16.default)(new Date(2004, 11
      /* Dec */
      , 26), {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), 2005);
    });
    it('parse', function () {
      var referenceDate = new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 900); // For reference: not setting any options

      _assert.default.deepStrictEqual((0, _index20.default)('2018', 'Y', referenceDate), new Date(2017, 11
      /* Dec */
      , 31));

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.deepStrictEqual((0, _index20.default)('2018', 'Y', referenceDate), new Date(2018, 0
      /* Jan */
      , 1)); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.deepStrictEqual((0, _index20.default)('2018', 'Y', referenceDate, {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), new Date(2017, 11
      /* Dec */
      , 31));
    });
    it('setWeek', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index22.default)(new Date(2005, 0
      /* Jan */
      , 2), 1), new Date(2004, 11
      /* Dec */
      , 26));

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.deepStrictEqual((0, _index22.default)(new Date(2005, 0
      /* Jan */
      , 2), 1), new Date(2004, 0
      /* Jan */
      , 4)); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.deepStrictEqual((0, _index22.default)(new Date(2005, 0
      /* Jan */
      , 2), 1, {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), new Date(2004, 11
      /* Dec */
      , 26));
    });
    it('setWeekYear', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index23.default)(new Date(2010, 0
      /* Jan */
      , 2), 2004), new Date(2004, 0
      /* Jan */
      , 3));

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.deepStrictEqual((0, _index23.default)(new Date(2010, 0
      /* Jan */
      , 2), 2004), new Date(2005, 0
      /* Jan */
      , 1)); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.deepStrictEqual((0, _index23.default)(new Date(2010, 0
      /* Jan */
      , 2), 2004, {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), new Date(2004, 0
      /* Jan */
      , 3));
    });
    it('startOfWeekYear', function () {
      // For reference: not setting any options
      _assert.default.deepStrictEqual((0, _index25.default)(new Date(2005, 6
      /* Jul */
      , 2)), new Date(2004, 11
      /* Dec */
      , 26, 0, 0, 0, 0));

      (0, _index.default)({
        weekStartsOn: 1,
        firstWeekContainsDate: 4
      });

      _assert.default.deepStrictEqual((0, _index25.default)(new Date(2005, 6
      /* Jul */
      , 2)), new Date(2005, 0
      /* Jan */
      , 3, 0, 0, 0, 0)); // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`


      _assert.default.deepStrictEqual((0, _index25.default)(new Date(2005, 6
      /* Jul */
      , 2), {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }), new Date(2004, 11
      /* Dec */
      , 26, 0, 0, 0, 0));
    });
  });
});