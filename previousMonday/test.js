"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('previousMonday', function () {
  it('returns the previous Monday given various dates after the same', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 5)), new Date(2021, 4
    /* May */
    , 31));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 6)), new Date(2021, 4
    /* May */
    , 31));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 7)), new Date(2021, 4
    /* May */
    , 31));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 14)), new Date(2021, 5
    /* Jun */
    , 7));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 15)), new Date(2021, 5
    /* Jun */
    , 14));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 16)), new Date(2021, 5
    /* Jun */
    , 14));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    (0, _assert.default)((0, _index.default)(new Date(NaN)) instanceof Date);
  });
});