"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('nextWednesday', function () {
  it('returns the following Wednesday given various dates before the same', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 23)), new Date(2020, 4
    /* May */
    , 27));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 22)), new Date(2020, 4
    /* May */
    , 27));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 21)), new Date(2020, 4
    /* May */
    , 27));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 20)), new Date(2020, 4
    /* May */
    , 27));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 19)), new Date(2020, 4
    /* May */
    , 20));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 18)), new Date(2020, 4
    /* May */
    , 20));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 4
    /* May */
    , 17)), new Date(2020, 4
    /* May */
    , 20));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    (0, _assert.default)((0, _index.default)(new Date(NaN)) instanceof Date);
  });
});