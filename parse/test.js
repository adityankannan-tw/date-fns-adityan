"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

describe('parse', function () {
  var referenceDate = new Date(1986, 3
  /* Apr */
  , 4, 10, 32, 0, 900);
  it('escapes characters between the single quote characters', function () {
    var result = (0, _index.default)('2018 hello world July 2nd', "yyyy 'hello world' MMMM do", referenceDate);

    _assert.default.deepStrictEqual(result, new Date(2018, 6
    /* Jul */
    , 2));
  });
  it('two single quote characters are transformed into a "real" single quote', function () {
    var result = (0, _index.default)("'5 o'clock'", "''h 'o''clock'''", referenceDate);

    _assert.default.deepStrictEqual(result, new Date(1986, 3
    /* Apr */
    , 4, 5));
  });
  it('accepts new line charactor', function () {
    var result = (0, _index.default)('2014-04-04\n05:00:00', "yyyy-MM-dd'\n'HH:mm:ss", referenceDate);

    _assert.default.deepStrictEqual(result, new Date(2014, 3
    /* Apr */
    , 4, 5));
  });
  describe('era', function () {
    it('abbreviated', function () {
      var result = (0, _index.default)('10000 BC', 'yyyyy G', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-9999, 0
      /* Jan */
      , 1));
    });
    it('wide', function () {
      var result = (0, _index.default)('2018 Anno Domini', 'yyyy GGGG', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    it('narrow', function () {
      var result = (0, _index.default)('44 B', 'y GGGGG', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-43, 0
      /* Jan */
      , 1));
    });
    it('with week-numbering year', function () {
      var result = (0, _index.default)('44 B', 'Y GGGGG', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-44, 11
      /* Dec */
      , 30));
    });
    it('parses stand-alone BC', function () {
      var result = (0, _index.default)('BC', 'G', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(0, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
    });
    it('parses stand-alone AD', function () {
      var result = (0, _index.default)('AD', 'G', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      ;
      [['G', 'BC'], ['R', '2019'], ['u', '2019'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            token = _ref2[0],
            example = _ref2[1];

        it("throws an error when G is used after ".concat(token), function () {
          var block = function block() {
            return (0, _index.default)("".concat(example, " 420"), "".concat(token, " G"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `G` at the same time")));
        });
      });
    });
  });
  describe('calendar year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('2017', 'y', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2017, 0
      /* Jan */
      , 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('2017th', 'yo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2017, 0
      /* Jan */
      , 1));
    });
    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)('02', 'yy', referenceDate);

        _assert.default.deepStrictEqual(result, new Date(2002, 0
        /* Jan */
        , 1));
      });
      it('gets the 100 year range from `referenceDate`', function () {
        var result = (0, _index.default)('02', 'yy', new Date(1860, 6
        /* Jul */
        , 2));

        _assert.default.deepStrictEqual(result, new Date(1902, 0
        /* Jan */
        , 1));
      });
    });
    it('three-digit zero-padding', function () {
      var result = (0, _index.default)('123', 'yyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(123, 0
      /* Jan */
      , 1));
    });
    it('four-digit zero-padding', function () {
      var result = (0, _index.default)('0044', 'yyyy', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(44, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('000001', 'yyyyyy', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      ;
      [['y', '2019'], ['Y', '2019'], ['R', '2019'], ['u', '2019'], ['w', '1'], ['I', '1'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            token = _ref4[0],
            example = _ref4[1];

        it("throws an error when y is used after ".concat(token), function () {
          var block = function block() {
            return (0, _index.default)("".concat(example, " 2019"), "".concat(token, " y"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `y` at the same time")));
        });
      });
    });
  });
  describe('local week-numbering year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('2002', 'Y', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2001, 11
      /* Dec */
      , 30));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('12345th', 'Yo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(12344, 11
      /* Dec */
      , 31));
    });
    describe('two-digit numeric year', function () {
      it('works as expected', function () {
        var result = (0, _index.default)('02', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true
        });

        _assert.default.deepStrictEqual(result, new Date(2001, 11
        /* Dec */
        , 30));
      });
      it('gets the 100 year range from `referenceDate`', function () {
        var result = (0, _index.default)('02', 'YY', new Date(1860, 6
        /* Jul */
        , 2), {
          useAdditionalWeekYearTokens: true
        });

        _assert.default.deepStrictEqual(result, new Date(1901, 11
        /* Dec */
        , 29));
      });
    });
    it('three-digit zero-padding', function () {
      var result = (0, _index.default)('123', 'YYY', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(122, 11
      /* Dec */
      , 27));
    });
    it('four-digit zero-padding', function () {
      var result = (0, _index.default)('2018', 'YYYY', referenceDate, {
        useAdditionalWeekYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(2017, 11
      /* Dec */
      , 31));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('000001', 'YYYYYY', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(0, 11
      /* Dec */
      , 31);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
    });
    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = (0, _index.default)('2018', 'Y', referenceDate, {
        weekStartsOn: 1
        /* Mon */
        ,
        firstWeekContainsDate: 4
      });

      _assert.default.deepStrictEqual(result, new Date(2018, 0
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
            return (0, _index.default)("".concat(example, " 2019"), "".concat(token, " Y"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `Y` at the same time")));
        });
      });
    });
  });
  describe('ISO week-numbering year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('-1234', 'R', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-1234, 0
      /* Jan */
      , 3));
    });
    it('two-digit zero-padding', function () {
      var result = (0, _index.default)('-02', 'RR', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-3, 11
      /* Dec */
      , 29));
    });
    it('three-digit zero-padding', function () {
      var result = (0, _index.default)('123', 'RRR', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(123, 0
      /* Jan */
      , 4));
    });
    it('four-digit zero-padding', function () {
      var result = (0, _index.default)('2018', 'RRRR', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('000001', 'RRRRRR', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
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
            return (0, _index.default)("".concat(example, " 2019"), "".concat(token, " R"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `R` at the same time")));
        });
      });
    });
  });
  describe('extended year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('-1234', 'u', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-1234, 0
      /* Jan */
      , 1));
    });
    it('two-digit zero-padding', function () {
      var result = (0, _index.default)('-02', 'uu', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(-2, 0
      /* Jan */
      , 1));
    });
    it('three-digit zero-padding', function () {
      var result = (0, _index.default)('123', 'uuu', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(123, 0
      /* Jan */
      , 1));
    });
    it('four-digit zero-padding', function () {
      var result = (0, _index.default)('2018', 'uuuu', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2018, 0
      /* Jan */
      , 1));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('000001', 'uuuuuu', referenceDate);
      var expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0
      /* Jan */
      , 1);
      expectedResult.setHours(0, 0, 0, 0);

      _assert.default.deepStrictEqual(result, expectedResult);
    });
    describe('validation', function () {
      ;
      [['G', 'AD'], ['y', '2019'], ['Y', '2019'], ['R', '2019'], ['u', '2019'], ['w', '1'], ['I', '1'], ['i', '1'], ['e', '1'], ['c', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            token = _ref10[0],
            example = _ref10[1];

        it("throws an error when u is used after ".concat(token), function () {
          var block = function block() {
            return (0, _index.default)("".concat(example, " 2019"), "".concat(token, " u"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `u` at the same time")));
        });
      });
    });
  });
  describe('quarter with following year', function () {
    it('first quarter', function () {
      var result = (0, _index.default)('Q1/2020', 'QQQ/yyyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2020, 0
      /* Jan */
      , 1));
    });
    it('second quarter', function () {
      var result = (0, _index.default)('Q2/2020', 'QQQ/yyyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2020, 3
      /* Apr */
      , 1));
    });
    it('third quarter', function () {
      var result = (0, _index.default)('Q3/2020', 'QQQ/yyyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2020, 6
      /* Jul */
      , 1));
    });
    it('fourth quarter', function () {
      var result = (0, _index.default)('Q4/2020', 'QQQ/yyyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2020, 9
      /* Oct */
      , 1));
    });
  });
  describe('quarter (formatting)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('1', 'Q', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('1st', 'Qo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('02', 'QQ', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Q3', 'QQQ', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 1));
    });
    it('wide', function () {
      var result = (0, _index.default)('4st quarter', 'QQQQ', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 9
      /* Oct */
      , 1));
    });
    it('narrow', function () {
      var result = (0, _index.default)('1', 'QQQQQ', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " Q"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `Q` at the same time")));
        });
      });
    });
  });
  describe('quarter (stand-alone)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('1', 'q', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('1th', 'qo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('02', 'qq', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Q3', 'qqq', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 1));
    });
    it('wide', function () {
      var result = (0, _index.default)('4th quarter', 'qqqq', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 9
      /* Oct */
      , 1));
    });
    it('narrow', function () {
      var result = (0, _index.default)('1', 'qqqqq', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " q"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `q` at the same time")));
        });
      });
    });
  });
  describe('month (formatting)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('6', 'M', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('6th', 'Mo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('01', 'MM', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Nov', 'MMM', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 1));
    });
    it('wide', function () {
      var result = (0, _index.default)('February', 'MMMM', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 1
      /* Feb */
      , 1));
    });
    it('narrow', function () {
      var result = (0, _index.default)('J', 'MMMMM', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " M"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `M` at the same time")));
        });
      });
    });
  });
  describe('month (stand-alone)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('6', 'L', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('6th', 'Lo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 5
      /* Jun */
      , 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('01', 'LL', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Nov', 'LLL', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 1));
    });
    it('wide', function () {
      var result = (0, _index.default)('February', 'LLLL', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 1
      /* Feb */
      , 1));
    });
    it('narrow', function () {
      var result = (0, _index.default)('J', 'LLLLL', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " L"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `L` at the same time")));
        });
      });
    });
  });
  describe('local week of year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('49', 'w', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 30));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('49th', 'wo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 10
      /* Nov */
      , 30));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('01', 'ww', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1985, 11
      /* Dec */
      , 29));
    });
    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
      var result = (0, _index.default)('49', 'w', referenceDate, {
        weekStartsOn: 1
        /* Mon */
        ,
        firstWeekContainsDate: 4
      });

      _assert.default.deepStrictEqual(result, new Date(1986, 11
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " w"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `w` at the same time")));
        });
      });
    });
  });
  describe('ISO week of year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('49', 'I', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 11
      /* Dec */
      , 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('49th', 'Io', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 11
      /* Dec */
      , 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('01', 'II', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1985, 11
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " I"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `I` at the same time")));
        });
      });
    });
  });
  describe('day of month', function () {
    it('numeric', function () {
      var result = (0, _index.default)('28', 'd', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 28));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('28th', 'do', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 28));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('01', 'dd', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " d"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `d` at the same time")));
        });
      });
    });
  });
  describe('day of year', function () {
    it('numeric', function () {
      var result = (0, _index.default)('200', 'D', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 19));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('200th', 'Do', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 6
      /* Jul */
      , 19));
    });
    it('two-digit zero-padding', function () {
      var result = (0, _index.default)('01', 'DD', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('three-digit zero-padding', function () {
      var result = (0, _index.default)('001', 'DDD', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 0
      /* Jan */
      , 1));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('000200', 'DDDDDD', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 6
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " D"), referenceDate, {
              useAdditionalDayOfYearTokens: true
            });
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `D` at the same time")));
        });
      });
    });
  });
  describe('day of week (formatting)', function () {
    it('abbreviated', function () {
      var result = (0, _index.default)('Mon', 'E', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('wide', function () {
      var result = (0, _index.default)('Tuesday', 'EEEE', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('narrow', function () {
      var result = (0, _index.default)('W', 'EEEEE', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('short', function () {
      var result = (0, _index.default)('Th', 'EEEEEE', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = (0, _index.default)('Thursday', 'EEEE', referenceDate, {
        weekStartsOn:
        /* Fri */
        5
      });

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " Mon"), "".concat(token, " E"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `E` at the same time")));
        });
      });
    });
  });
  describe('ISO day of week (formatting)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('1', 'i', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('1st', 'io', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('02', 'ii', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Wed', 'iii', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('wide', function () {
      var result = (0, _index.default)('Thursday', 'iiii', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('narrow', function () {
      var result = (0, _index.default)('S', 'iiiii', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 6));
    });
    it('short', function () {
      var result = (0, _index.default)('Fr', 'iiiiii', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " i"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `i` at the same time")));
        });
      });
    });
  });
  describe('local day of week (formatting)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('2', 'e', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('2nd', 'eo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('03', 'ee', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Wed', 'eee', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('wide', function () {
      var result = (0, _index.default)('Thursday', 'eeee', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('narrow', function () {
      var result = (0, _index.default)('S', 'eeeee', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 30));
    });
    it('short', function () {
      var result = (0, _index.default)('Fr', 'eeeeee', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = (0, _index.default)('7th', 'eo', referenceDate, {
        weekStartsOn:
        /* Fri */
        5
      });

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " e"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `e` at the same time")));
        });
      });
    });
  });
  describe('local day of week (stand-alone)', function () {
    it('numeric', function () {
      var result = (0, _index.default)('2', 'c', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('2nd', 'co', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 31));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('03', 'cc', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 1));
    });
    it('abbreviated', function () {
      var result = (0, _index.default)('Wed', 'ccc', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 2));
    });
    it('wide', function () {
      var result = (0, _index.default)('Thursday', 'cccc', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 3));
    });
    it('narrow', function () {
      var result = (0, _index.default)('S', 'ccccc', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 2
      /* Mar */
      , 30));
    });
    it('short', function () {
      var result = (0, _index.default)('Fr', 'cccccc', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4));
    });
    it('allows to specify which day is the first day of the week', function () {
      var result = (0, _index.default)('7th', 'co', referenceDate, {
        weekStartsOn:
        /* Fri */
        5
      });

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " c"), referenceDate, options);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `c` at the same time")));
        });
      });
    });
  });
  describe('AM, PM', function () {
    it('abbreviated', function () {
      var result = (0, _index.default)('5 AM', 'h a', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 5));
    });
    it('12 AM', function () {
      var result = (0, _index.default)('12 AM', 'h aa', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    it('12 PM', function () {
      var result = (0, _index.default)('12 PM', 'h aaa', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('wide', function () {
      var result = (0, _index.default)('5 p.m.', 'h aaaa', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 17));
    });
    it('narrow', function () {
      var result = (0, _index.default)('11 a', 'h aaaaa', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " AM"), "".concat(token, " a"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `a` at the same time")));
        });
      });
    });
  });
  describe('AM, PM, noon, midnight', function () {
    it('abbreviated', function () {
      var result = (0, _index.default)('noon', 'b', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('wide', function () {
      var result = (0, _index.default)('midnight', 'bbbb', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 0));
    });
    it('narrow', function () {
      var result = (0, _index.default)('mi', 'bbbbb', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " AM"), "".concat(token, " b"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `b` at the same time")));
        });
      });
    });
  });
  describe('flexible day period', function () {
    it('abbreviated', function () {
      var result = (0, _index.default)('2 at night', 'h B', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 2));
    });
    it('wide', function () {
      var result = (0, _index.default)('12 in the afternoon', 'h BBBB', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('narrow', function () {
      var result = (0, _index.default)('5 in the evening', 'h BBBBB', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " in the morning"), "".concat(token, " B"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `B` at the same time")));
        });
      });
    });
  });
  describe('hour [1-12]', function () {
    it('numeric', function () {
      var result = (0, _index.default)('1', 'h', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('1st', 'ho', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('01', 'hh', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " h"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `h` at the same time")));
        });
      });
    });
  });
  describe('hour [0-23]', function () {
    it('numeric', function () {
      var result = (0, _index.default)('12', 'H', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('12th', 'Ho', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('00', 'HH', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " H"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `H` at the same time")));
        });
      });
    });
  });
  describe('hour [0-11]', function () {
    it('numeric', function () {
      var result = (0, _index.default)('1', 'K', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('1st', 'Ko', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 1));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('1', 'KK', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " K"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `K` at the same time")));
        });
      });
    });
  });
  describe('hour [1-24]', function () {
    it('numeric', function () {
      var result = (0, _index.default)('12', 'k', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('12th', 'ko', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 12));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('24', 'kk', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " k"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `k` at the same time")));
        });
      });
    });
  });
  describe('minute', function () {
    it('numeric', function () {
      var result = (0, _index.default)('25', 'm', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 25));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('25th', 'mo', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 25));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('05', 'mm', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " m"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `m` at the same time")));
        });
      });
    });
  });
  describe('second', function () {
    it('numeric', function () {
      var result = (0, _index.default)('25', 's', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 25));
    });
    it('ordinal', function () {
      var result = (0, _index.default)('25th', 'so', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 25));
    });
    it('zero-padding', function () {
      var result = (0, _index.default)('05', 'ss', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " s"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `s` at the same time")));
        });
      });
    });
  });
  describe('fraction of second', function () {
    it('1/10 of second', function () {
      var result = (0, _index.default)('1', 'S', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 100));
    });
    it('1/100 of second', function () {
      var result = (0, _index.default)('12', 'SS', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 120));
    });
    it('millisecond', function () {
      var result = (0, _index.default)('123', 'SSS', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
      /* Apr */
      , 4, 10, 32, 0, 123));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('567890', 'SSSSSS', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1986, 3
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
            return (0, _index.default)("".concat(example, " 1"), "".concat(token, " S"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `S` at the same time")));
        });
      });
    });
  });
  describe('timezone (ISO-8601 w/ Z)', function () {
    describe('X', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+05', "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123+05:00'));
      });
    });
    describe('XX', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('XXX', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('XXXX', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+053045', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
      });
    });
    describe('XXXXX', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123Z', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+05:30:45', "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
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
            return (0, _index.default)("".concat(example, " -0530"), "".concat(token, " X"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `X` at the same time")));
        });
      });
    });
  });
  describe('timezone (ISO-8601 w/o Z)', function () {
    describe('x', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+05', "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123+05:00'));
      });
    });
    describe('xx', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('xxx', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
    });
    describe('xxxx', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-0530', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+0000', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+053045', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
      });
    });
    describe('xxxxx', function () {
      it('hours and minutes', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123-05:30', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123-05:30'));
      });
      it('GMT', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+00:00', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:38:38.123Z'));
      });
      it('hours, minutes and seconds', function () {
        var result = (0, _index.default)('2016-11-25T16:38:38.123+05:30:45', "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);

        _assert.default.deepStrictEqual(result, new Date('2016-11-25T16:37:53.123+05:30'));
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
            return (0, _index.default)("".concat(example, " -0530"), "".concat(token, " x"), referenceDate);
          };

          _assert.default.throws(block, RangeError);

          _assert.default.throws(block, new RegExp("The format string mustn't contain `".concat(token, "` and `x` at the same time")));
        });
      });
    });
  });
  describe('seconds timestamp', function () {
    it('numeric', function () {
      var result = (0, _index.default)('512969520', 't', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(512969520000));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('00000000000512969520', 'tttttttttttttttttttt', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(512969520000));
    });
    it("throws an error when it is used after any token", function () {
      var block = function block() {
        return (0, _index.default)("1 512969520", "h t", referenceDate);
      };

      _assert.default.throws(block, RangeError);

      _assert.default.throws(block, new RegExp("The format string mustn't contain `t` and any other token at the same time"));
    });
  });
  describe('milliseconds timestamp', function () {
    it('numeric', function () {
      var result = (0, _index.default)('512969520900', 'T', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(512969520900));
    });
    it('specified amount of digits', function () {
      var result = (0, _index.default)('00000000512969520900', 'TTTTTTTTTTTTTTTTTTTT', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(512969520900));
    });
    it("throws an error when it is used after any token", function () {
      var block = function block() {
        return (0, _index.default)("1 512969520900", "h T", referenceDate);
      };

      _assert.default.throws(block, RangeError);

      _assert.default.throws(block, new RegExp("The format string mustn't contain `T` and any other token at the same time"));
    });
  });
  describe('common formats', function () {
    it('ISO-8601', function () {
      var result = (0, _index.default)('20161105T040404', "yyyyMMdd'T'HHmmss", referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2016, 10
      /* Nov */
      , 5, 4, 4, 4, 0));
    });
    it('ISO week-numbering date', function () {
      var result = (0, _index.default)('2016W474T153005', "RRRR'W'IIi'T'HHmmss", referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2016, 10
      /* Nov */
      , 24, 15, 30, 5, 0));
    });
    it('ISO day of year date', function () {
      var result = (0, _index.default)('2010123T235959', "yyyyDDD'T'HHmmss", referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2010, 4
      /* May */
      , 3, 23, 59, 59, 0));
    });
    it('Date.prototype.toString()', function () {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600';
      var formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx";
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, new Date(dateString));
    });
    it('Date.prototype.toISOString()', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00';
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, new Date(dateString));
    });
    it('middle-endian', function () {
      var result = (0, _index.default)('5 a.m. 07/02/2016', 'h aaaa MM/dd/yyyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2016, 6
      /* Jul */
      , 2, 5, 0, 0, 0));
    });
    it('little-endian', function () {
      var result = (0, _index.default)('02.07.1995', 'dd.MM.yyyy', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(1995, 6
      /* Jul */
      , 2, 0, 0, 0, 0));
    });
  });
  describe('priority', function () {
    it("units of lower priority don't overwrite values of higher priority", function () {
      var dateString = '+06:00 123 15 30 05 02 07 2014';
      var formatString = 'xxx SSS ss mm HH dd MM yyyy';
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, new Date('2014-07-02T05:30:15.123+06:00'));
    });
  });
  describe('with `options.strictValidation` = true', function () {
    describe('calendar year', function () {
      it('returns `Invalid Date` for year zero', function () {
        var result = (0, _index.default)('0', 'y', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('works correctly for two-digit year zero', function () {
        var result = (0, _index.default)('00', 'yy', referenceDate);

        _assert.default.deepStrictEqual(result, new Date(2000, 0
        /* Jan */
        , 1));
      });
    });
    describe('local week-numbering year', function () {
      it('returns `Invalid Date` for year zero', function () {
        var result = (0, _index.default)('0', 'Y', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('works correctly for two-digit year zero', function () {
        var result = (0, _index.default)('00', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true
        });

        _assert.default.deepStrictEqual(result, new Date(1999, 11
        /* Dec */
        , 26));
      });
    });
    describe('quarter (formatting)', function () {
      it('returns `Invalid Date` for invalid quarter', function () {
        var result = (0, _index.default)('0', 'Q', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('quarter (stand-alone)', function () {
      it('returns `Invalid Date` for invalid quarter', function () {
        var result = (0, _index.default)('5', 'q', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('month (formatting)', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = (0, _index.default)('00', 'MM', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('month (stand-alone)', function () {
      it('returns `Invalid Date` for invalid month', function () {
        var result = (0, _index.default)('13', 'LL', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('local week of year', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = (0, _index.default)('0', 'w', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('ISO week of year', function () {
      it('returns `Invalid Date` for invalid week', function () {
        var result = (0, _index.default)('54', 'II', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('day of month', function () {
      it('returns `Invalid Date` for invalid day of the month', function () {
        var result = (0, _index.default)('30', 'd', new Date(2012, 1
        /* Feb */
        , 1));
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 29th of February of non-leap year', function () {
        var result = (0, _index.default)('29', 'd', new Date(2014, 1
        /* Feb */
        , 1));
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('parses 29th of February of leap year', function () {
        var result = (0, _index.default)('29', 'd', new Date(2012, 1
        /* Feb */
        , 1));

        _assert.default.deepStrictEqual(result, new Date(2012, 1
        /* Feb */
        , 29));
      });
    });
    describe('day of year', function () {
      it('returns `Invalid Date` for invalid day of the year', function () {
        var result = (0, _index.default)('0', 'D', referenceDate, {
          useAdditionalDayOfYearTokens: true
        });
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for 366th day of non-leap year', function () {
        var result = (0, _index.default)('366', 'D', new Date(2014, 1
        /* Feb */
        , 1), {
          useAdditionalDayOfYearTokens: true
        });
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('parses 366th day of leap year', function () {
        var result = (0, _index.default)('366', 'D', new Date(2012, 1
        /* Feb */
        , 1), {
          useAdditionalDayOfYearTokens: true
        });

        _assert.default.deepStrictEqual(result, new Date(2012, 11
        /* Dec */
        , 31));
      });
    });
    describe('ISO day of week (formatting)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = (0, _index.default)('0', 'i', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for eight day of week', function () {
        var result = (0, _index.default)('8', 'i', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('local day of week (formatting)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = (0, _index.default)('0', 'e', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for eight day of week', function () {
        var result = (0, _index.default)('8', 'e', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('local day of week (stand-alone)', function () {
      it('returns `Invalid Date` for day zero', function () {
        var result = (0, _index.default)('0', 'c', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for eight day of week', function () {
        var result = (0, _index.default)('8', 'c', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [1-12]', function () {
      it('returns `Invalid Date` for hour zero', function () {
        var result = (0, _index.default)('00', 'hh', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid hour', function () {
        var result = (0, _index.default)('13', 'hh', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [0-23]', function () {
      it('returns `Invalid Date` for invalid hour', function () {
        var result = (0, _index.default)('24', 'HH', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [0-11]', function () {
      it('returns `Invalid Date` for invalid hour', function () {
        var result = (0, _index.default)('12', 'KK', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('hour [1-24]', function () {
      it('returns `Invalid Date` for hour zero', function () {
        var result = (0, _index.default)('00', 'kk', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
      it('returns `Invalid Date` for invalid hour', function () {
        var result = (0, _index.default)('25', 'kk', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('minute', function () {
      it('returns `Invalid Date` for invalid minute', function () {
        var result = (0, _index.default)('60', 'mm', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
      });
    });
    describe('second', function () {
      it('returns `Invalid Date` for invalid second', function () {
        var result = (0, _index.default)('60', 'ss', referenceDate);
        (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
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
      var result = (0, _index.default)('2018 foobar', "y G 'it works!'", referenceDate, {
        // @ts-expect-error
        locale: customLocale
      });

      _assert.default.deepStrictEqual(result, new Date(-2017, 0
      /* Jan */
      , 1));
    });
    it('throws `RangeError` if `options.locale` does not contain `match` property', function () {
      var block = function block() {
        return (0, _index.default)('2016-11-25 04 AM', 'yyyy-MM-dd hh a', referenceDate, {
          // @ts-expect-error
          locale: {}
        });
      };

      _assert.default.throws(block, RangeError);
    });
  });
  it('accepts a timestamp as `referenceDate`', function () {
    var dateString = '6 p.m.';
    var formatString = 'h aaaa';
    var result = (0, _index.default)(dateString, formatString, referenceDate.getTime());

    _assert.default.deepStrictEqual(result, new Date(1986, 3
    /* Apr */
    , 4, 18));
  });
  it('does not mutate `referenceDate`', function () {
    var referenceDateClone1 = new Date(referenceDate.getTime());
    var referenceDateClone2 = new Date(referenceDate.getTime());
    var dateString = '6 p.m.';
    var formatString = 'h aaaa';
    (0, _index.default)(dateString, formatString, referenceDateClone1);

    _assert.default.deepStrictEqual(referenceDateClone1, referenceDateClone2);
  });
  describe('failure', function () {
    it('returns `referenceDate` if `dateString` and `formatString` are empty strings', function () {
      var dateString = '';
      var formatString = '';
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, referenceDate);
    });
    it('returns `referenceDate` if no tokens in `formatString` are provided', function () {
      var dateString = 'not a token';
      var formatString = "'not a token'";
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, referenceDate);
    });
    it("returns `Invalid Date`  if `formatString` doesn't match `dateString`", function () {
      var dateString = '2017-01-01';
      var formatString = 'yyyy/MM/dd';
      var result = (0, _index.default)(dateString, formatString, referenceDate);
      (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
    });
    it('returns `Invalid Date`  if `formatString` tokens failed to parse a value', function () {
      var dateString = '2017-01-01';
      var formatString = 'MMMM do yyyy';
      var result = (0, _index.default)(dateString, formatString, referenceDate);
      (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
    });
    it('returns `Invalid Date` if `formatString` is empty string but `dateString` is not', function () {
      var dateString = '2017-01-01';
      var formatString = '';
      var result = (0, _index.default)(dateString, formatString, referenceDate);
      (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
    });
    it('returns `Invalid Date` if `referenceDate` is `Invalid Date`', function () {
      var dateString = '2014-07-02T05:30:15.123+06:00';
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
      var result = (0, _index.default)(dateString, formatString, new Date(NaN));
      (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
    });
  });
  describe('edge cases', function () {
    it('returns Invalid Date if the string contains some remaining input after parsing', function () {
      var result = (0, _index.default)('2016-11-05T040404', 'yyyy-MM-dd', referenceDate);
      (0, _assert.default)(result instanceof Date && isNaN(result.getTime()));
    });
    it('parses normally if the remaining input is just whitespace', function () {
      var result = (0, _index.default)('2016-11-05   \n', 'yyyy-MM-dd', referenceDate);

      _assert.default.deepStrictEqual(result, new Date(2016, 10
      /* Nov */
      , 5));
    });
    it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
      _assert.default.throws(function () {
        return (0, _index.default)('2016-11-05-nnnn', 'yyyy-MM-dd-nnnn', referenceDate);
      }, RangeError);
    });
  });
  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', function () {
    it('throws an error if D token is used', function () {
      try {
        (0, _index.default)('2016 5', 'yyyy D', referenceDate);
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `d` instead of `D`'));
      }
    });
    it('allows D token if useAdditionalDayOfYearTokens is set to true', function () {
      var result = (0, _index.default)('2016 5', 'yyyy D', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(2016, 0, 5));
    });
    it('throws an error if DD token is used', function () {
      try {
        (0, _index.default)('2016 05', 'yyyy DD', referenceDate);
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `dd` instead of `DD`'));
      }
    });
    it('allows DD token if useAdditionalDayOfYearTokens is set to true', function () {
      var result = (0, _index.default)('2016 05', 'yyyy DD', referenceDate, {
        useAdditionalDayOfYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(2016, 0, 5));
    });
    it('throws an error if YY token is used', function () {
      try {
        (0, _index.default)('16 1', 'YY w', referenceDate);
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `yy` instead of `YY`'));
      }
    });
    it('allows YY token if useAdditionalWeekYearTokens is set to true', function () {
      var result = (0, _index.default)('16 1', 'YY w', referenceDate, {
        useAdditionalWeekYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(2015, 11, 27));
    });
    it('throws an error if YYYY token is used', function () {
      try {
        (0, _index.default)('2016 1', 'YYYY w', referenceDate);
      } catch (e) {
        (0, _assert.default)(e instanceof RangeError);
        (0, _assert.default)(e.message.startsWith('Use `yyyy` instead of `YYYY`'));
      }
    });
    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', function () {
      var result = (0, _index.default)('2016 1', 'YYYY w', referenceDate, {
        useAdditionalWeekYearTokens: true
      });

      _assert.default.deepStrictEqual(result, new Date(2015, 11, 27));
    });
  });
  describe('long format', function () {
    it('short date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = '05/26/1995';
      var formatString = 'P';
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('medium date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = 'May 26, 1995';
      var formatString = 'PP';
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('long date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = 'May 26th, 1995';
      var formatString = 'PPP';
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('full date', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26);
      var dateString = 'Friday, May 26th, 1995';
      var formatString = 'PPPP';
      var result = (0, _index.default)(dateString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('short time', function () {
      var expected = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 10, 32);
      var timeString = '10:32 AM';
      var formatString = 'p';
      var result = (0, _index.default)(timeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('medium time', function () {
      var expected = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 10, 32, 55);
      var timeString = '10:32:55 AM';
      var formatString = 'pp';
      var result = (0, _index.default)(timeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('short date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = '05/26/1995, 10:32 AM';
      var formatString = 'Pp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('medium date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = 'May 26, 1995, 10:32 AM';
      var formatString = 'PPp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('long date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = 'May 26th, 1995 at 10:32 AM';
      var formatString = 'PPPp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('full date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32);
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32 AM';
      var formatString = 'PPPPp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('short date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = '05/26/1995, 10:32:55 AM';
      var formatString = 'Ppp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('medium date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = 'May 26, 1995, 10:32:55 AM';
      var formatString = 'PPpp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('long date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = 'May 26th, 1995 at 10:32:55 AM';
      var formatString = 'PPPpp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
    it('full date + short time', function () {
      var expected = new Date(1995, 4
      /* May */
      , 26, 10, 32, 55);
      var dateTimeString = 'Friday, May 26th, 1995 at 10:32:55 AM';
      var formatString = 'PPPPpp';
      var result = (0, _index.default)(dateTimeString, formatString, referenceDate);

      _assert.default.deepStrictEqual(result, expected);
    });
  });
});