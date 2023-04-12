"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('previousSunday', function () {
  it('returns the previous Sunday given various dates after the same', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 7)), new Date(2021, 5
    /* Jun */
    , 6));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 8)), new Date(2021, 5
    /* Jun */
    , 6));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 13)), new Date(2021, 5
    /* Jun */
    , 6));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 16)), new Date(2021, 5
    /* Jun */
    , 13));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 17)), new Date(2021, 5
    /* Jun */
    , 13));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2021, 5
    /* Jun */
    , 24)), new Date(2021, 5
    /* Jun */
    , 20));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    (0, _assert.default)((0, _index.default)(new Date(NaN)) instanceof Date);
  });
});