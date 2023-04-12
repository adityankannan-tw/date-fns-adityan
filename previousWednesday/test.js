"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('previousWednesday', function () {
  it('returns the previous Wednesday given various dates after the same', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 5)), new Date(2021, 5
    /* Jun */
    , 2));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 6)), new Date(2021, 5
    /* Jun */
    , 2));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 9)), new Date(2021, 5
    /* Jun */
    , 2));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 17)), new Date(2021, 5
    /* Jun */
    , 16));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 18)), new Date(2021, 5
    /* Jun */
    , 16));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 25)), new Date(2021, 5
    /* Jun */
    , 23));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    (0, _assert.default)((0, _index.default)(new Date(NaN)) instanceof Date);
  });
});