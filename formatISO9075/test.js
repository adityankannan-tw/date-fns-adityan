"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatISO9075', function () {
  it('formats ISO-9075 extended date format', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123);
    (0, _assert.default)((0, _index.default)(date) === '2019-03-03 19:00:52');
  });
  it('accepts a timestamp', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123).getTime();
    (0, _assert.default)((0, _index.default)(date) === '2019-03-03 19:00:52');
  });
  it('formats ISO-8601 basic date format', function () {
    var date = new Date(2019, 9
    /* Oct */
    , 4, 12, 30, 13, 456);
    (0, _assert.default)((0, _index.default)(date, {
      format: 'basic'
    }) === '20191004 123013');
  });
  it('formats only date', function () {
    var date = new Date(2019, 11
    /* Dec */
    , 11, 1, 0, 0, 789);
    (0, _assert.default)((0, _index.default)(date, {
      representation: 'date',
      format: 'extended'
    }) === '2019-12-11');
    (0, _assert.default)((0, _index.default)(date, {
      representation: 'date',
      format: 'basic'
    }) === '20191211');
  });
  it('formats only time', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123);
    (0, _assert.default)((0, _index.default)(date, {
      representation: 'time',
      format: 'extended'
    }) === '19:00:52');
    (0, _assert.default)((0, _index.default)(date, {
      representation: 'time',
      format: 'basic'
    }) === '190052');
  });
  it('throws RangeError if the time value is invalid', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});