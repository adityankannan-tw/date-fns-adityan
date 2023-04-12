"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = require("../_lib/test/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatRFC3339', function () {
  it('formats RFC-3339 date string', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123);
    (0, _assert.default)((0, _index.default)(date) === "2019-03-03T19:00:52".concat((0, _index2.generateOffset)(date)));

    var getTimezoneOffsetStub = _sinon.default.stub(Date.prototype, 'getTimezoneOffset');

    getTimezoneOffsetStub.returns(0);
    (0, _assert.default)((0, _index.default)(date) === '2019-03-03T19:00:52Z');
    getTimezoneOffsetStub.returns(480);
    (0, _assert.default)((0, _index.default)(date) === '2019-03-03T19:00:52-08:00');
    getTimezoneOffsetStub.restore();
  });
  it('accepts a timestamp', function () {
    var date = new Date(2019, 9
    /* Oct */
    , 4, 12, 30, 13, 456);
    var time = date.getTime();
    (0, _assert.default)((0, _index.default)(time) === "2019-10-04T12:30:13".concat((0, _index2.generateOffset)(date)));
  });
  it('allows to specify digits of second fractions', function () {
    var date = new Date(2019, 11
    /* Dec */
    , 11, 1, 0, 0, 789);
    (0, _assert.default)((0, _index.default)(date, {
      fractionDigits: 3
    }) === "2019-12-11T01:00:00.789".concat((0, _index2.generateOffset)(date)));
  });
  it('works when ms < 100', function () {
    var date = new Date(2019, 11
    /* Dec */
    , 11, 1, 0, 0, 12);
    (0, _assert.default)((0, _index.default)(date, {
      fractionDigits: 2
    }) === "2019-12-11T01:00:00.01".concat((0, _index2.generateOffset)(date)));
  });
  it('throws RangeError if the time value is invalid', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});