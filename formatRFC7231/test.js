"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatRFC7231', function () {
  it('formats RFC-7231 date string', function () {
    var date = new Date(Date.UTC(2019, 2, 3, 19, 0, 52));
    (0, _assert.default)((0, _index.default)(date) === 'Sun, 03 Mar 2019 19:00:52 GMT');
  });
  it('accepts a timestamp', function () {
    var date = Date.UTC(2019, 9, 4, 12, 30, 13);
    (0, _assert.default)((0, _index.default)(date) === 'Fri, 04 Oct 2019 12:30:13 GMT');
  });
  it('throws RangeError if the time value is invalid', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});