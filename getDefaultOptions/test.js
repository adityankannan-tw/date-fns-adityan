"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = _interopRequireDefault(require("../setDefaultOptions/index.js"));

var _index3 = _interopRequireDefault(require("../startOfWeek/index.js"));

var _index4 = require("../_lib/defaultOptions/index.js");

var _index5 = _interopRequireDefault(require("../locale/eo/index.js"));

var _index6 = require("../_lib/test/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('getDefaultOptions', function () {
  afterEach(_index6.resetDefaultOptions);
  it('returns an empty object', function () {
    var result = (0, _index.default)();

    _assert.default.deepStrictEqual(result, {});
  });
  it('returns a clone of the original object', function () {
    (0, _index4.setDefaultOptions)({
      weekStartsOn: 1
    });
    var result = (0, _index.default)();

    _assert.default.deepStrictEqual((0, _index4.getDefaultOptions)(), result);
  });
  it('mutating the result does not affect functions that use options', function () {
    var defaultOptionsClone = (0, _index.default)();
    defaultOptionsClone.weekStartsOn = 1;
    var result = (0, _index3.default)(new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));

    _assert.default.deepStrictEqual(result, new Date(2014, 7
    /* Aug */
    , 31)); // Mutating the original object does affect `startOfWeek`


    var _defaultOptions = (0, _index4.getDefaultOptions)();

    _defaultOptions.weekStartsOn = 1;
    var result2 = (0, _index3.default)(new Date(2014, 8
    /* Sep */
    , 2, 11, 55, 0));

    _assert.default.deepStrictEqual(result2, new Date(2014, 8
    /* Sep */
    , 1));
  });
  it('returns new values after setting them via `setDefaultOptions`', function () {
    (0, _index2.default)({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: _index5.default
    });
    var result = (0, _index.default)();

    _assert.default.deepStrictEqual(result, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: _index5.default
    });
  });
});