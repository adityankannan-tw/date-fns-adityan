"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('nextTuesday', function () {
  it('returns the following Tuesday given various dates before the same', function () {
    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 2
    /* Mar */
    , 23)), new Date(2020, 2
    /* Mar */
    , 24));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 2
    /* Mar */
    , 22)), new Date(2020, 2
    /* Mar */
    , 24));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 3
    /* Apr */
    , 11)), new Date(2020, 3
    /* Apr */
    , 14));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 2
    /* Mar */
    , 20)), new Date(2020, 2
    /* Mar */
    , 24));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 2
    /* Mar */
    , 19)), new Date(2020, 2
    /* Mar */
    , 24));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 2
    /* Mar */
    , 18)), new Date(2020, 2
    /* Mar */
    , 24));

    _assert.default.deepStrictEqual((0, _index.default)(new Date(2020, 2
    /* Mar */
    , 17)), new Date(2020, 2
    /* Mar */
    , 24));
  });
  it('returns `Invalid Date` if the given date is invalid', function () {
    (0, _assert.default)((0, _index.default)(new Date(NaN)) instanceof Date);
  });
});