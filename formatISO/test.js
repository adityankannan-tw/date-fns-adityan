"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = require("../_lib/test/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('formatISO', function () {
  it('formats ISO-8601 extended format', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123);
    var tzOffsetExtended = (0, _index2.generateOffset)(date);
    (0, _assert.default)((0, _index.default)(date) === "2019-03-03T19:00:52".concat(tzOffsetExtended));

    var getTimezoneOffsetStub = _sinon.default.stub(Date.prototype, 'getTimezoneOffset');

    getTimezoneOffsetStub.returns(480);
    var tzNegativeOffsetExtended = (0, _index2.generateOffset)(date);
    (0, _assert.default)((0, _index.default)(date) === "2019-03-03T19:00:52".concat(tzNegativeOffsetExtended));
    getTimezoneOffsetStub.returns(0);
    var tzZOffsetExtended = (0, _index2.generateOffset)(date);
    (0, _assert.default)((0, _index.default)(date) === "2019-03-03T19:00:52".concat(tzZOffsetExtended));
    getTimezoneOffsetStub.restore();
  });
  it('accepts a timestamp', function () {
    var date = new Date(2019, 2
    /* Mar */
    , 3, 19, 0, 52, 123).getTime();
    var tzOffsetExtended = (0, _index2.generateOffset)(new Date(date));
    (0, _assert.default)((0, _index.default)(date) === "2019-03-03T19:00:52".concat(tzOffsetExtended));
  });
  it('formats ISO-8601 basic format', function () {
    var date = new Date(2019, 9
    /* Oct */
    , 4, 12, 30, 13, 456);
    var tzOffsetBasic = (0, _index2.generateOffset)(date);
    (0, _assert.default)((0, _index.default)(date, {
      format: 'basic'
    }) === "20191004T123013".concat(tzOffsetBasic));
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
    var tzOffset = (0, _index2.generateOffset)(date);
    (0, _assert.default)((0, _index.default)(date, {
      representation: 'time',
      format: 'extended'
    }) === "19:00:52".concat(tzOffset));
    (0, _assert.default)((0, _index.default)(date, {
      representation: 'time',
      format: 'basic'
    }) === "190052".concat(tzOffset));
  });
  it('throws RangeError if the time value is invalid', function () {
    _assert.default.throws(_index.default.bind(null, new Date(NaN)), RangeError);
  });
});