function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-env mocha */
import assert from 'assert';
import parse from "./index.js";
describe('parse', function () {
  var referenceDate = new Date(1986, 3
  /* Apr */
  , 4, 10, 32, 0, 900);
  it('escapes characters between the single quote characters', function () {
    var result = parse('2018 hello world July 2nd', "yyyy 'hello world' MMMM do", referenceDate);
    assert.deepStrictEqual(result, new Date(2018, 6
    /* Jul */
    , 2));
  });
  it('two single quote characters are transformed into a "real" single quote', function () {
    var result = parse("'5 o'clock'", "''h 'o''clock'''", referenceDate);
    assert.deepStrictEqual(result, new Date(1986, 3
    /* Apr */
    , 4, 5));
  });
  it('accepts new line charactor', function () {
    var result = parse('2014-04-04\n05:00:00', "yyyy-MM-dd'\n'HH:mm:ss", referenceDate);
    assert.deepStrictEqual(result, new Date(2014, 3
    /* Apr */
    , 4, 5));
  });
  describe('era', function () {
    it('abbreviated', function () {
      var result = parse('10000 BC', 'yyyyy G', referenceDate);
      assert.deepStrictEqual(result, new Date(-9999, 0
      /* Jan */
      , 1));
    });
    it('wide', function () {
      var result = parse('2018 Anno Domini', 'yyyy GGGG', referenceDate);
      assert.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    it('narrow', function () {
      var result = parse('44 B', 'y GGGGG', referenceDate);
      assert.deepStrictEqual(result, new Date(-43, 0
      /* Jan */
      , 1));
    });
    it('with week-numbering year', function () {
      var result = parse('44 B', 'Y GGGGG', referenceDate);
      assert.deepStrictEqual(result, new Date(-44, 11
      /* Dec */
      , 30));
    });
    it('parses stand-alone BC', function () {
      var result = parse('BC', 'G', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(0, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    it('parses stand-alone AD', function () {
      var result = parse('AD', 'G', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      ;
      [['G', 'BC'], ['R', '2019'], ['u', '2019'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            token = _ref2[0],
            example = _ref2[1];

        it("throws an error when G is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 420"), "".concat(token, " G"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `G` at the same time")));
        });
      });
    });
  });
  describe('calendar year', function () {
    it('numeric', function () {
      var result = parse('2017', 'y', referenceDate);
      assert.deepStrictEqual(result, new Date(2017, 0
      /* Jan */
      , 1));
    });
    it('ordinal', function () {
      var result = parse('2017th', 'yo', referenceDate);
      assert.deepStrictEqual(result, new Date(2017, 0
      /* Jan */
      , 1));
    });
    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = parse('02', 'yy', referenceDate);
        assert.deepStrictEqual(result, new Date(2002, 0
        /* Jan */
        , 1));
      });
      it('gets the 100 year range from `referenceDate`', function () {
        var result = parse('02', 'yy', new Date(1860, 6
        /* Jul */
        , 2));
        assert.deepStrictEqual(result, new Date(1902, 0
        /* Jan */
        , 1));
      });
    });
    it('three-digit zero-padding', function () {
      var result = parse('123', 'yyy', referenceDate);
      assert.deepStrictEqual(result, new Date(123, 0
      /* Jan */
      , 1));
    });
    it('four-digit zero-padding', function () {
      var result = parse('0044', 'yyyy', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(44, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    it('specified amount of digits', function () {
      var result = parse('000001', 'yyyyyy', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      ;
      [['y', '2019'], ['Y', '2019'], ['R', '2019'], ['u', '2019'], ['w', '1'], ['I', '1'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            token = _ref4[0],
            example = _ref4[1];

        it("throws an error when y is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 2019"), "".concat(token, " y"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `y` at the same time")));
        });
      });
    });
  });
  describe('local week-numbering year', function () {
    it('numeric', function () {
      var result = parse('2002', 'Y', referenceDate);
      assert.deepStrictEqual(result, new Date(2001, 11
      /* Dec */
      , 30));
    });
    it('ordinal', function () {
      var result = parse('12345th', 'Yo', referenceDate);
      assert.deepStrictEqual(result, new Date(12344, 11
      /* Dec */
      , 31));
    });
    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = parse('02', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true
        });
        assert.deepStrictEqual(result, new Date(2001, 11
        /* Dec */
        , 30));
      });
      it('gets the 100 year range from `referenceDate`', function () {
        var result = parse('02', 'YY', new Date(1860, 6
        /* Jul */
        , 2), {
          useAdditionalWeekYearTokens: true
        });
        assert.deepStrictEqual(result, new Date(1901, 11
        /* Dec */
        , 29));
      });
    });
    it('three-digit zero-padding', function () {
      var result = parse('123', 'YYY', referenceDate);
      assert.deepStrictEqual(result, new Date(122, 11
      /* Dec */
      , 27));
    });
    it('four-digit zero-padding', function () {
      var result = parse('2018', 'YYYY', referenceDate, {
        useAdditionalWeekYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(2017, 11
      /* Dec */
      , 31));
    });
    it('specified amount of digits', function () {
      var result = parse('000001', 'YYYYYY', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(0, 11
      /* Dec */
      , 31);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = parse('2018', 'Y', referenceDate, {
        weekStartsOn: 1
        /* Mon */
        ,
        firstWeekContainsDate: 4
      });
      assert.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['y', '2019'], ['Y', '2019'], ['R', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 3),
            token = _ref6[0],
            example = _ref6[1],
            options = _ref6[2];

        it("throws an error when Y is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 2019"), "".concat(token, " Y"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `Y` at the same time")));
        });
      });
    });
  });
  describe('ISO week-numbering year', function () {
    it('numeric', function () {
      var result = parse('-1234', 'R', referenceDate);
      assert.deepStrictEqual(result, new Date(-1234, 0
      /* Jan */
      , 3));
    });
    it('two-digit zero-padding', function () {
      var result = parse('-02', 'RR', referenceDate);
      assert.deepStrictEqual(result, new Date(-3, 11
      /* Dec */
      , 29));
    });
    it('three-digit zero-padding', function () {
      var result = parse('123', 'RRR', referenceDate);
      assert.deepStrictEqual(result, new Date(123, 0
      /* Jan */
      , 4));
    });
    it('four-digit zero-padding', function () {
      var result = parse('2018', 'RRRR', referenceDate);
      assert.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    it('specified amount of digits', function () {
      var result = parse('000001', 'RRRRRR', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      var tokensToValidate = [['G', 'AD'], ['y', '2019'], ['Y', '2019'], ['R', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 3),
            token = _ref8[0],
            example = _ref8[1],
            options = _ref8[2];

        it("throws an error when R is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 2019"), "".concat(token, " R"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `R` at the same time")));
        });
      });
    });
  });
  describe('extended year', function () {
    it('numeric', function () {
      var result = parse('-1234', 'u', referenceDate);
      assert.deepStrictEqual(result, new Date(-1234, 0
      /* Jan */
      , 1));
    });
    it('two-digit zero-padding', function () {
      var result = parse('-02', 'uu', referenceDate);
      assert.deepStrictEqual(result, new Date(-2, 0
      /* Jan */
      , 1));
    });
    it('three-digit zero-padding', function () {
      var result = parse('123', 'uuu', referenceDate);
      assert.deepStrictEqual(result, new Date(123, 0
      /* Jan */
      , 1));
    });
    it('four-digit zero-padding', function () {
      var result = parse('2018', 'uuuu', referenceDate);
      assert.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    it('specified amount of digits', function () {
      var result = parse('000001', 'uuuuuu', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      ;
      [['G', 'AD'], ['y', '2019'], ['Y', '2019'], ['R', '2019'], ['u', '2019'], ['w', '1'], ['I', '1'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            token = _ref10[0],
            example = _ref10[1];

        it("throws an error when u is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 2019"), "".concat(token, " u"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `u` at the same time")));
        });
      });
    });
  });
  describe('quarter with following year', function () {
    it('first quarter', function () {
      var result = parse('Q1/2020', 'QQQ/yyyy', referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 0
      /* Jan */
      , 1));
    });
    it('second quarter', function () {
      var result = parse('Q2/2020', 'QQQ/yyyy', referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 3
      /* Apr */
      , 1));
    });
    it('third quarter', function () {
      var result = parse('Q3/2020', 'QQQ/yyyy', referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 6
      /* Jul */
      , 1));
    });
    it('fourth quarter', function () {
      var result = parse('Q4/2020', 'QQQ/yyyy', referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 9
      /* Oct */
      , 1));
    });
  });
  describe('quarter (formatting)', function () {
    it('numeric', function () {
      var result = parse('1', 'Q', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('ordinal', function () {
      var result = parse('1st', 'Qo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('zero-padding', function () {
      var result = parse('02', 'QQ', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Q3', 'QQQ', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 1));
    });
    it('wide', function () {
      var result = parse('4st quarter', 'QQQQ', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 9
      /* Oct */
      , 1));
    });
    it('narrow', function () {
      var result = parse('1', 'QQQQQ', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['Y', '2019'], ['R', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 3),
            token = _ref12[0],
            example = _ref12[1],
            options = _ref12[2];

        it("throws an error when Q is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " Q"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `Q` at the same time")));
        });
      });
    });
  });
  describe('quarter (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('1', 'q', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('ordinal', function () {
      var result = parse('1th', 'qo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('zero-padding', function () {
      var result = parse('02', 'qq', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Q3', 'qqq', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 1));
    });
    it('wide', function () {
      var result = parse('4th quarter', 'qqqq', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 9
      /* Oct */
      , 1));
    });
    it('narrow', function () {
      var result = parse('1', 'qqqqq', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['Y', '2019'], ['R', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 3),
            token = _ref14[0],
            example = _ref14[1],
            options = _ref14[2];

        it("throws an error when q is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " q"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `q` at the same time")));
        });
      });
    });
  });
  describe('month (formatting)', function () {
    it('numeric', function () {
      var result = parse('6', 'M', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('ordinal', function () {
      var result = parse('6th', 'Mo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('zero-padding', function () {
      var result = parse('01', 'MM', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Nov', 'MMM', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 1));
    });
    it('wide', function () {
      var result = parse('February', 'MMMM', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 1
      /* Feb */
      , 1));
    });
    it('narrow', function () {
      var result = parse('J', 'MMMMM', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['Y', '2019'], ['R', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 3),
            token = _ref16[0],
            example = _ref16[1],
            options = _ref16[2];

        it("throws an error when M is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " M"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `M` at the same time")));
        });
      });
    });
  });
  describe('month (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('6', 'L', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('ordinal', function () {
      var result = parse('6th', 'Lo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('zero-padding', function () {
      var result = parse('01', 'LL', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Nov', 'LLL', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 1));
    });
    it('wide', function () {
      var result = parse('February', 'LLLL', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 1
      /* Feb */
      , 1));
    });
    it('narrow', function () {
      var result = parse('J', 'LLLLL', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['Y', '2019'], ['R', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 3),
            token = _ref18[0],
            example = _ref18[1],
            options = _ref18[2];

        it("throws an error when L is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " L"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `L` at the same time")));
        });
      });
    });
  });
  describe('local week of year', function () {
    it('numeric', function () {
      var result = parse('49', 'w', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 30));
    });
    it('ordinal', function () {
      var result = parse('49th', 'wo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 30));
    });
    it('zero-padding', function () {
      var result = parse('01', 'ww', referenceDate);
      assert.deepStrictEqual(result, new Date(1985, 11
      /* Dec */
      , 29));
    });
    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = parse('49', 'w', referenceDate, {
        weekStartsOn: 1
        /* Mon */
        ,
        firstWeekContainsDate: 4
      });
      assert.deepStrictEqual(result, new Date(1986, 11
      /* Dec */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['y', '2019'], ['R', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref19) {
        var _ref20 = _slicedToArray(_ref19, 3),
            token = _ref20[0],
            example = _ref20[1],
            options = _ref20[2];

        it("throws an error when w is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " w"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `w` at the same time")));
        });
      });
    });
  });
  describe('ISO week of year', function () {
    it('numeric', function () {
      var result = parse('49', 'I', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 11
      /* Dec */
      , 1));
    });
    it('ordinal', function () {
      var result = parse('49th', 'Io', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 11
      /* Dec */
      , 1));
    });
    it('zero-padding', function () {
      var result = parse('01', 'II', referenceDate);
      assert.deepStrictEqual(result, new Date(1985, 11
      /* Dec */
      , 30));
    });
    describe('validation', function () {
      var tokensToValidate = [['y', '2019'], ['Y', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref21) {
        var _ref22 = _slicedToArray(_ref21, 3),
            token = _ref22[0],
            example = _ref22[1],
            options = _ref22[2];

        it("throws an error when I is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " I"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `I` at the same time")));
        });
      });
    });
  });
  describe('day of month', function () {
    it('numeric', function () {
      var result = parse('28', 'd', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 28));
    });
    it('ordinal', function () {
      var result = parse('28th', 'do', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 28));
    });
    it('zero-padding', function () {
      var result = parse('01', 'dd', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    describe('validation', function () {
      var tokensToValidate = [['Y', '2019'], ['R', '2019'], ['Q', '1'], ['q', '1'], ['w', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref23) {
        var _ref24 = _slicedToArray(_ref23, 3),
            token = _ref24[0],
            example = _ref24[1],
            options = _ref24[2];

        it("throws an error when d is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " d"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `d` at the same time")));
        });
      });
    });
  });
  describe('day of year', function () {
    it('numeric', function () {
      var result = parse('200', 'D', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 19));
    });
    it('ordinal', function () {
      var result = parse('200th', 'Do', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 19));
    });
    it('two-digit zero-padding', function () {
      var result = parse('01', 'DD', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('three-digit zero-padding', function () {
      var result = parse('001', 'DDD', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('specified amount of digits', function () {
      var result = parse('000200', 'DDDDDD', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 19));
    });
    describe('validation', function () {
      ;
      [['Y', '2019'], ['R', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['I', '1'], ['d', '1'], ['D', '1'], ['E', 'Mon'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref25) {
        var _ref26 = _slicedToArray(_ref25, 3),
            token = _ref26[0],
            example = _ref26[1],
            _options = _ref26[2];

        it("throws an error when D is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " D"), referenceDate, {
              useAdditionalDayOfYearTokens: true
            });
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `D` at the same time")));
        });
      });
    });
  });
  describe('day of week (formatting)', function () {
    it('abbreviated', function () {
      var result = parse('Mon', 'E', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('wide', function () {
      var result = parse('Tuesday', 'EEEE', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('narrow', function () {
      var result = parse('W', 'EEEEE', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('short', function () {
      var result = parse('Th', 'EEEEEE', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = parse('Thursday', 'EEEE', referenceDate, {
        weekStartsOn:
        /* Fri */
        5
      });
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 10));
    });
    describe('validation', function () {
      var tokensToValidate = [['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['E', 'Mon'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref27) {
        var _ref28 = _slicedToArray(_ref27, 3),
            token = _ref28[0],
            example = _ref28[1],
            options = _ref28[2];

        it("throws an error when E is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " Mon"), "".concat(token, " E"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `E` at the same time")));
        });
      });
    });
  });
  describe('ISO day of week (formatting)', function () {
    it('numeric', function () {
      var result = parse('1', 'i', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('ordinal', function () {
      var result = parse('1st', 'io', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('zero-padding', function () {
      var result = parse('02', 'ii', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Wed', 'iii', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('wide', function () {
      var result = parse('Thursday', 'iiii', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('narrow', function () {
      var result = parse('S', 'iiiii', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 6));
    });
    it('short', function () {
      var result = parse('Fr', 'iiiiii', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4));
    });
    describe('validation', function () {
      var tokensToValidate = [['y', '2019'], ['Y', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['w', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['E', 'Mon'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref29) {
        var _ref30 = _slicedToArray(_ref29, 3),
            token = _ref30[0],
            example = _ref30[1],
            options = _ref30[2];

        it("throws an error when i is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " i"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `i` at the same time")));
        });
      });
    });
  });
  describe('local day of week (formatting)', function () {
    it('numeric', function () {
      var result = parse('2', 'e', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('ordinal', function () {
      var result = parse('2nd', 'eo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('zero-padding', function () {
      var result = parse('03', 'ee', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Wed', 'eee', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('wide', function () {
      var result = parse('Thursday', 'eeee', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('narrow', function () {
      var result = parse('S', 'eeeee', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 30));
    });
    it('short', function () {
      var result = parse('Fr', 'eeeeee', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = parse('7th', 'eo', referenceDate, {
        weekStartsOn:
        /* Fri */
        5
      });
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 10));
    });
    describe('validation', function () {
      var tokensToValidate = [['y', '2019'], ['R', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['E', 'Mon'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref31) {
        var _ref32 = _slicedToArray(_ref31, 3),
            token = _ref32[0],
            example = _ref32[1],
            options = _ref32[2];

        it("throws an error when e is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " e"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `e` at the same time")));
        });
      });
    });
  });
  describe('local day of week (stand-alone)', function () {
    it('numeric', function () {
      var result = parse('2', 'c', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('ordinal', function () {
      var result = parse('2nd', 'co', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('zero-padding', function () {
      var result = parse('03', 'cc', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = parse('Wed', 'ccc', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('wide', function () {
      var result = parse('Thursday', 'cccc', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('narrow', function () {
      var result = parse('S', 'ccccc', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 30));
    });
    it('short', function () {
      var result = parse('Fr', 'cccccc', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = parse('7th', 'co', referenceDate, {
        weekStartsOn:
        /* Fri */
        5
      });
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 10));
    });
    describe('validation', function () {
      var tokensToValidate = [['y', '2019'], ['R', '2019'], ['u', '2019'], ['Q', '1'], ['q', '1'], ['M', '1'], ['L', '1'], ['I', '1'], ['d', '1'], ['D', '1', {
        useAdditionalDayOfYearTokens: true
      }], ['E', 'Mon'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']];
      tokensToValidate.forEach(function (_ref33) {
        var _ref34 = _slicedToArray(_ref33, 3),
            token = _ref34[0],
            example = _ref34[1],
            options = _ref34[2];

        it("throws an error when c is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " c"), referenceDate, options);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `c` at the same time")));
        });
      });
    });
  });
  describe('AM, PM', function () {
    it('abbreviated', function () {
      var result = parse('5 AM', 'h a', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 5));
    });
    it('12 AM', function () {
      var result = parse('12 AM', 'h aa', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    it('12 PM', function () {
      var result = parse('12 PM', 'h aaa', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('wide', function () {
      var result = parse('5 p.m.', 'h aaaa', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 17));
    });
    it('narrow', function () {
      var result = parse('11 a', 'h aaaaa', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 11));
    });
    describe('validation', function () {
      ;
      [['a', 'AM'], ['b', 'AM'], ['B', 'in the morning'], ['H', '1'], ['k', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref35) {
        var _ref36 = _slicedToArray(_ref35, 2),
            token = _ref36[0],
            example = _ref36[1];

        it("throws an error when a is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " AM"), "".concat(token, " a"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `a` at the same time")));
        });
      });
    });
  });
  describe('AM, PM, noon, midnight', function () {
    it('abbreviated', function () {
      var result = parse('noon', 'b', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('wide', function () {
      var result = parse('midnight', 'bbbb', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    it('narrow', function () {
      var result = parse('mi', 'bbbbb', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    describe('validation', function () {
      ;
      [['a', 'AM'], ['b', 'AM'], ['B', 'in the morning'], ['H', '1'], ['k', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref37) {
        var _ref38 = _slicedToArray(_ref37, 2),
            token = _ref38[0],
            example = _ref38[1];

        it("throws an error when b is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " AM"), "".concat(token, " b"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `b` at the same time")));
        });
      });
    });
  });
  describe('flexible day period', function () {
    it('abbreviated', function () {
      var result = parse('2 at night', 'h B', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 2));
    });
    it('wide', function () {
      var result = parse('12 in the afternoon', 'h BBBB', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('narrow', function () {
      var result = parse('5 in the evening', 'h BBBBB', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 17));
    });
    describe('validation', function () {
      ;
      [['a', 'AM'], ['b', 'AM'], ['B', 'in the morning'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref39) {
        var _ref40 = _slicedToArray(_ref39, 2),
            token = _ref40[0],
            example = _ref40[1];

        it("throws an error when B is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " in the morning"), "".concat(token, " B"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `B` at the same time")));
        });
      });
    });
  });
  describe('hour [1-12]', function () {
    it('numeric', function () {
      var result = parse('1', 'h', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('ordinal', function () {
      var result = parse('1st', 'ho', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('zero-padding', function () {
      var result = parse('01', 'hh', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    describe('validation', function () {
      ;
      [['h', '1'], ['H', '1'], ['K', '1'], ['k', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref41) {
        var _ref42 = _slicedToArray(_ref41, 2),
            token = _ref42[0],
            example = _ref42[1];

        it("throws an error when h is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " h"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `h` at the same time")));
        });
      });
    });
  });
  describe('hour [0-23]', function () {
    it('numeric', function () {
      var result = parse('12', 'H', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('ordinal', function () {
      var result = parse('12th', 'Ho', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('zero-padding', function () {
      var result = parse('00', 'HH', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    describe('validation', function () {
      ;
      [['a', 'AM'], ['b', 'AM'], ['h', '1'], ['H', '1'], ['K', '1'], ['k', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref43) {
        var _ref44 = _slicedToArray(_ref43, 2),
            token = _ref44[0],
            example = _ref44[1];

        it("throws an error when H is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " H"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `H` at the same time")));
        });
      });
    });
  });
  describe('hour [0-11]', function () {
    it('numeric', function () {
      var result = parse('1', 'K', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('ordinal', function () {
      var result = parse('1st', 'Ko', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('zero-padding', function () {
      var result = parse('1', 'KK', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    describe('validation', function () {
      ;
      [['h', '1'], ['H', '1'], ['K', '1'], ['k', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref45) {
        var _ref46 = _slicedToArray(_ref45, 2),
            token = _ref46[0],
            example = _ref46[1];

        it("throws an error when K is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " K"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `K` at the same time")));
        });
      });
    });
  });
  describe('hour [1-24]', function () {
    it('numeric', function () {
      var result = parse('12', 'k', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('ordinal', function () {
      var result = parse('12th', 'ko', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('zero-padding', function () {
      var result = parse('24', 'kk', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    describe('validation', function () {
      ;
      [['a', 'AM'], ['b', 'AM'], ['h', '1'], ['H', '1'], ['K', '1'], ['k', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref47) {
        var _ref48 = _slicedToArray(_ref47, 2),
            token = _ref48[0],
            example = _ref48[1];

        it("throws an error when k is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " k"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `k` at the same time")));
        });
      });
    });
  });
  describe('minute', function () {
    it('numeric', function () {
      var result = parse('25', 'm', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 25));
    });
    it('ordinal', function () {
      var result = parse('25th', 'mo', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 25));
    });
    it('zero-padding', function () {
      var result = parse('05', 'mm', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 5));
    });
    describe('validation', function () {
      ;
      [['m', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref49) {
        var _ref50 = _slicedToArray(_ref49, 2),
            token = _ref50[0],
            example = _ref50[1];

        it("throws an error when m is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " m"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `m` at the same time")));
        });
      });
    });
  });
  describe('second', function () {
    it('numeric', function () {
      var result = parse('25', 's', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 25));
    });
    it('ordinal', function () {
      var result = parse('25th', 'so', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 25));
    });
    it('zero-padding', function () {
      var result = parse('05', 'ss', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 5));
    });
    describe('validation', function () {
      ;
      [['s', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref51) {
        var _ref52 = _slicedToArray(_ref51, 2),
            token = _ref52[0],
            example = _ref52[1];

        it("throws an error when s is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " s"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `s` at the same time")));
        });
      });
    });
  });
  describe('fraction of second', function () {
    it('1/10 of second', function () {
      var result = parse('1', 'S', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 100));
    });
    it('1/100 of second', function () {
      var result = parse('12', 'SS', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 120));
    });
    it('millisecond', function () {
      var result = parse('123', 'SSS', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 123));
    });
    it('specified amount of digits', function () {
      var result = parse('567890', 'SSSSSS', referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 567));
    });
    describe('validation', function () {
      ;
      [['S', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref53) {
        var _ref54 = _slicedToArray(_ref53, 2),
            token = _ref54[0],
            example = _ref54[1];

        it("throws an error when S is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " 1"), "".concat(token, " S"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `S` at the same time")));
        });
      });
    });
  });
  describe('timezone (ISO-8601 w/ Z)', function () {
    describe('X', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours', function () {
        var result = parse('2016-11-25T16:38:38.123+05', "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123+05:00'));
      });
    });
    describe('XX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('XXX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('XXXX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+053045', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
      });
    });
    describe('XXXXX', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+05:30:45', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
      });
    });
    describe('validation', function () {
      ;
      [['X', '-0530'], ['x', '-0530'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref55) {
        var _ref56 = _slicedToArray(_ref55, 2),
            token = _ref56[0],
            example = _ref56[1];

        it("throws an error when X is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " -0530"), "".concat(token, " X"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `X` at the same time")));
        });
      });
    });
  });
  describe('timezone (ISO-8601 w/o Z)', function () {
    describe('x', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours', function () {
        var result = parse('2016-11-25T16:38:38.123+05', "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123+05:00'));
      });
    });
    describe('xx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('xxx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('xxxx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+053045', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
      });
    });
    describe('xxxxx', function () {
      it('hours and minutes', function () {
        var result = parse('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = parse('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = parse('2016-11-25T16:38:38.123+05:30:45', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);
        assert.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
      });
    });
    describe('validation', function () {
      ;
      [['X', '-0530'], ['x', '-0530'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref57) {
        var _ref58 = _slicedToArray(_ref57, 2),
            token = _ref58[0],
            example = _ref58[1];

        it("throws an error when x is used after ".concat(token), function () {
          var block = function block() {
            return parse("".concat(example, " -0530"), "".concat(token, " x"), referenceDate);
          };

          assert.throws(block, RangeError);
          assert.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `x` at the same time")));
        });
      });
    });
  });
  describe('seconds timestamp', function () {
    it('numeric', function () {
      var result = parse('512969520', 't', referenceDate);
      assert.deepStrictEqual(result, new Date(512969520000));
    });
    it('specified amount of digits', function () {
      var result = parse('00000000000512969520', 'tttttttttttttttttttt', referenceDate);
      assert.deepStrictEqual(result, new Date(512969520000));
    });
    it("throws an error when it is used after any token", function () {
      var block = function block() {
        return parse("1 512969520", "h t", referenceDate);
      };

      assert.throws(block, RangeError);
      assert.throws(block, new RegExp("The format string mustn't contain `t` and any other token at the same time"));
    });
  });
  describe('milliseconds timestamp', function () {
    it('numeric', function () {
      var result = parse('512969520900', 'T', referenceDate);
      assert.deepStrictEqual(result, new Date(512969520900));
    });
    it('specified amount of digits', function () {
      var result = parse('00000000512969520900', 'TTTTTTTTTTTTTTTTTTTT', referenceDate);
      assert.deepStrictEqual(result, new Date(512969520900));
    });
    it("throws an error when it is used after any token", function () {
      var block = function block() {
        return parse("1 512969520900", "h T", referenceDate);
      };

      assert.throws(block, RangeError);
      assert.throws(block, new RegExp("The format string mustn't contain `T` and any other token at the same time"));
    });
  });
  describe('common formats', function () {
    it('ISO-8601', function () {
      var result = parse('20161105T040404', "yyyyMMdd'T'HHmmss", referenceDate);
      assert.deepStrictEqual(result, new Date(2016, 10
      /* Nov */
      , 5, 4, 4, 4, 0));
    });
    it('ISO week-numbering date', function () {
      var result = parse('2016W474T153005', "RRRR'W'IIi'T'HHmmss", referenceDate);
      assert.deepStrictEqual(result, new Date(2016, 10
      /* Nov */
      , 24, 15, 30, 5, 0));
    });
    it('ISO day of year date', function () {
      var result = parse('2010123T235959', "yyyyDDD'T'HHmmss", referenceDate);
      assert.deepStrictEqual(result, new Date(2010, 4
      /* May */
      , 3, 23, 59, 59, 0));
    });
    it('Date.prototype.toString()', function () {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600';
      var formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx";
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, new Date(dateString));
    });
    it('Date.prototype.toISOString()', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00';
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, new Date(dateString));
    });
    it('middle-endian', function () {
      var result = parse('5 a.m. 07/02/2016', 'h aaaa MM/dd/yyyy', referenceDate);
      assert.deepStrictEqual(result, new Date(2016, 6
      /* Jul */
      , 2, 5, 0, 0, 0));
    });
    it('little-endian', function () {
      var result = parse('02.07.1995', 'dd.MM.yyyy', referenceDate);
      assert.deepStrictEqual(result, new Date(1995, 6
      /* Jul */
      , 2, 0, 0, 0, 0));
    });
  });
  describe('priority', function () {
    it("units of lower priority don't overwrite values of higher priority", function () {
      var dateString = '+06:00 123 15 30 05 02 07 2014';
      var formatString = 'xxx SSS ss mm HH dd MM yyyy';
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, new Date('2014-07-02T05:30:15.123+06:00'));
    });
  });
  describe('with `options.strictValidation` = true', function () {
    describe('calendar year', function () {
      it('returns `Invalid Date` for year zero', function () {
        var result = parse('0', 'y', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('works correctly for two-digit year zero', function () {
        var result = parse('00', 'yy', referenceDate);
        assert.deepStrictEqual(result, new Date(2000, 0
        /* Jan */
        , 1));
      });
    });
    describe('local week-numbering year', function () {
      it('returns `Invalid Date` for year zero', function () {
        var result = parse('0', 'Y', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('works correctly for two-digit year zero', function () {
        var result = parse('00', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true
        });
        assert.deepStrictEqual(result, new Date(1999, 11
        /* Dec */
        , 26));
      });
    });
    describe('quarter (formatting)', function () {
      it('returns `Invalid Date` for invalid quarter', function () {
        var result = parse('0', 'Q', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('quarter (stand-alone)', function () {
      it('returns `Invalid Date` for invalid quarter', function () {
        var result = parse('5', 'q', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('month (formatting)', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = parse('00', 'MM', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('month (stand-alone)', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = parse('13', 'LL', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('local week of year', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = parse('0', 'w', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('ISO week of year', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = parse('54', 'II', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('day of month', function () {
      it('returns `Invalid Date` for invalid day of the month', function () {
        var result = parse('30', 'd', new Date(2012, 1
        /* Feb */
        , 1));
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 29th of February of non-leap year', function () {
        var result = parse('29', 'd', new Date(2014, 1
        /* Feb */
        , 1));
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('parses 29th of February of leap year', function () {
        var result = parse('29', 'd', new Date(2012, 1
        /* Feb */
        , 1));
        assert.deepStrictEqual(result, new Date(2012, 1
        /* Feb */
        , 29));
      });
    });
    describe('day of year', function () {
      it('returns `Invalid Date` for invalid day of the year', function () {
        var result = parse('0', 'D', referenceDate, {
          useAdditionalDayOfYearTokens: true
        });
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 366th day of non-leap year', function () {
        var result = parse('366', 'D', new Date(2014, 1
        /* Feb */
        , 1), {
          useAdditionalDayOfYearTokens: true
        });
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('parses 366th day of leap year', function () {
        var result = parse('366', 'D', new Date(2012, 1
        /* Feb */
        , 1), {
          useAdditionalDayOfYearTokens: true
        });
        assert.deepStrictEqual(result, new Date(2012, 11
        /* Dec */
        , 31));
      });
    });
    describe('ISO day of week (formatting)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = parse('0', 'i', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for eight day of week', function () {
        var result = parse('8', 'i', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('local day of week (formatting)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = parse('0', 'e', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for eight day of week', function () {
        var result = parse('8', 'e', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('local day of week (stand-alone)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = parse('0', 'c', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for eight day of week', function () {
        var result = parse('8', 'c', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [1-12]', function () {
      it('returns `Invalid Date` for hour zero', function () {
        var result = parse('00', 'hh', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('13', 'hh', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [0-23]', function () {
      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('24', 'HH', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [0-11]', function () {
      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('12', 'KK', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [1-24]', function () {
      it('returns `Invalid Date` for hour zero', function () {
        var result = parse('00', 'kk', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid hour', function () {
        var result = parse('25', 'kk', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('minute', function () {
      it('returns `Invalid Date` for invalid minute', function () {
        var result = parse('60', 'mm', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('second', function () {
      it('returns `Invalid Date` for invalid second', function () {
        var result = parse('60', 'ss', referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
  });
  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      var customLocale = {
        match: {
          era: function era() {
            return {
              value: 0,
              rest: ' it works!'
            };
          }
        }
      };
      var result = parse('2018 foobar', "y G 'it works!'", referenceDate, {
        // @ts-expect-error
        locale: customLocale
      });
      assert.deepStrictEqual(result, new Date(-2017, 0
      /* Jan */
      , 1));
    });
    it('throws `RangeError` if `options.locale` does not contain `match` property', function () {
      var block = function block() {
        return parse('2016-11-25 04 AM', 'yyyy-MM-dd hh a', referenceDate, {
          // @ts-expect-error
          locale: {}
        });
      };

      assert.throws(block, RangeError);
    });
  });
  it('accepts a timestamp as `referenceDate`', function () {
    var dateString = '6 p.m.';
    var formatString = 'h aaaa';
    var result = parse(dateString, formatString, referenceDate.getTime());
    assert.deepStrictEqual(result, new Date(1986, 3
    /* Apr */
    , 4, 18));
  });
  it('does not mutate `referenceDate`', function () {
    var referenceDateClone1 = new Date(referenceDate.getTime());
    var referenceDateClone2 = new Date(referenceDate.getTime());
    var dateString = '6 p.m.';
    var formatString = 'h aaaa';
    parse(dateString, formatString, referenceDateClone1);
    assert.deepStrictEqual(referenceDateClone1, referenceDateClone2);
  });
  describe('failure', function () {
    it('returns `referenceDate` if `dateString` and `formatString` are empty strings', function () {
      var dateString = '';
      var formatString = '';
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, referenceDate);
    });
    it('returns `referenceDate` if no tokens in `formatString` are provided', function () {
      var dateString = 'not a token';
      var formatString = "'not a token'";
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, referenceDate);
    });
    it("returns `Invalid Date`  if `formatString` doesn't match `dateString`", function () {
      var dateString = '2017-01-01';
      var formatString = 'yyyy/MM/dd';
      var result = parse(dateString, formatString, referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });
    it('returns `Invalid Date`  if `formatString` tokens failed to parse a value', function () {
      var dateString = '2017-01-01';
      var formatString = 'MMMM do yyyy';
      var result = parse(dateString, formatString, referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });
    it('returns `Invalid Date` if `formatString` is empty string but `dateString` is not', function () {
      var dateString = '2017-01-01';
      var formatString = '';
      var result = parse(dateString, formatString, referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });
    it('returns `Invalid Date` if `referenceDate` is `Invalid Date`', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00';
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
      var result = parse(dateString, formatString, new Date(NaN));
      assert(result instanceof Date && isNaN(result.getTime()));
    });
  });
  describe('edge cases', function () {
    it('returns Invalid Date if the string contains some remaining input after parsing', function () {
      var result = parse('2016-11-05T040404', 'yyyy-MM-dd', referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });
    it('parses normally if the remaining input is just whitespace', function () {
      var result = parse('2016-11-05   \n', 'yyyy-MM-dd', referenceDate);
      assert.deepStrictEqual(result, new Date(2016, 10
      /* Nov */
      , 5));
    });
    it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
      assert.throws(function () {
        return parse('2016-11-05-nnnn', 'yyyy-MM-dd-nnnn', referenceDate);
      }, RangeError);
    });
  });
  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', function () {
    it('throws an error if D token is used', function () {
      try {
        parse('2016 5', 'yyyy D', referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith('Use `d` instead of `D`'));
      }
    });
    it('allows D token if useAdditionalDayOfYearTokens is set to true', function () {
      var result = parse('2016 5', 'yyyy D', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(2016, 0, 5));
    });
    it('throws an error if DD token is used', function () {
      try {
        parse('2016 05', 'yyyy DD', referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith('Use `dd` instead of `DD`'));
      }
    });
    it('allows DD token if useAdditionalDayOfYearTokens is set to true', function () {
      var result = parse('2016 05', 'yyyy DD', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(2016, 0, 5));
    });
    it('throws an error if YY token is used', function () {
      try {
        parse('16 1', 'YY w', referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith('Use `yy` instead of `YY`'));
      }
    });
    it('allows YY token if useAdditionalWeekYearTokens is set to true', function () {
      var result = parse('16 1', 'YY w', referenceDate, {
        useAdditionalWeekYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(2015, 11, 27));
    });
    it('throws an error if YYYY token is used', function () {
      try {
        parse('2016 1', 'YYYY w', referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith('Use `yyyy` instead of `YYYY`'));
      }
    });
    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', function () {
      var result = parse('2016 1', 'YYYY w', referenceDate, {
        useAdditionalWeekYearTokens: true
      });
      assert.deepStrictEqual(result, new Date(2015, 11, 27));
    });
  });
  describe('long format', function () {
    it('short date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = '05/26/1995';
      var formatString = 'P';
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('medium date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = 'May 26, 1995';
      var formatString = 'PP';
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('long date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = 'May 26th, 1995';
      var formatString = 'PPP';
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('full date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = 'Friday, May 26th, 1995';
      var formatString = 'PPPP';
      var result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('short time', function () {
      var expected = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 10, 32);
      var timeString = '10:32 AM';
      var formatString = 'p';
      var result = parse(timeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('medium time', function () {
      var expected = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 10, 32, 55);
      var timeString = '10:32:55 AM';
      var formatString = 'pp';
      var result = parse(timeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('short date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = '05/26/1995, 10:32 AM';
      var formatString = 'Pp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('medium date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = 'May 26, 1995, 10:32 AM';
      var formatString = 'PPp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('long date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = 'May 26th, 1995 at 10:32 AM';
      var formatString = 'PPPp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('full date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32 AM';
      var formatString = 'PPPPp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('short date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = '05/26/1995, 10:32:55 AM';
      var formatString = 'Ppp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('medium date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = 'May 26, 1995, 10:32:55 AM';
      var formatString = 'PPpp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('long date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = 'May 26th, 1995 at 10:32:55 AM';
      var formatString = 'PPPpp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
    it('full date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32:55 AM';
      var formatString = 'PPPPpp';
      var result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
  });
});