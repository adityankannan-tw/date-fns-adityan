"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

var _index2 = _interopRequireDefault(require("../format/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('parseJSON', function () {
  it('parses a formatted new Date() back to UTC - issue 2149', function () {
    var date = new Date();
    var jsonFormat = (0, _index2.default)(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    var parsedDate = (0, _index.default)(jsonFormat);

    _assert.default.strictEqual(parsedDate.toISOString(), date.toISOString());
  });
  it('parses a formatted date with an hour of offset back to UTC - issue 2149', function () {
    var date = '2021-01-09T13:18:10.873+01:00';
    var expectedDate = new Date('2021-01-09T12:18:10.873Z');
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate.toISOString());
  });
  it('parses a formatted date with 2 hours of offset back to UTC - issue 2149', function () {
    var date = '2021-01-09T13:18:10.873+02:00';
    var expectedDate = new Date('2021-01-09T11:18:10.873Z');
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate.toISOString());
  });
  it('parses a formatted date with -2 hours of offset back to UTC - issue 2149', function () {
    var date = '2021-01-09T13:18:10.873-02:00';
    var expectedDate = new Date('2021-01-09T15:18:10.873Z');
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate.toISOString());
  });
  it('parses a formatted Indian Standart Time in Asia/Kolkata with +5:30 hours of offset back to UTC - issue 2149', function () {
    var date = '2021-02-15T02:56:04.678+05:30';
    var expectedDate = new Date('2021-02-14T21:26:04.678Z');
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate.toISOString());
  });
  it('parses a formatted time in Asia/Kathmandu with +5:45 hours of offset back to UTC - issue 2149', function () {
    var date = '2021-02-15T17:45:00.900+05:45';
    var expectedDate = new Date('2021-02-15T12:00:00.900Z');
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate.toISOString());
  });
  it('parses a fully formed ISO date with Z', function () {
    var date = '2000-03-15T05:20:10.123Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), date);
  });
  it('parses a fully formed ISO date with Z without ms', function () {
    var date = '2000-03-15T05:20:10Z';
    var expectedDate = '2000-03-15T05:20:10.000Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses a fully formed ISO date with zero offset', function () {
    var zeroOffset = '2000-03-15T05:20:10+00:00';
    var expectedDate = '2000-03-15T05:20:10.000Z';
    var parsedDate = (0, _index.default)(zeroOffset);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses a fully formed ISO date with zero offset without colon', function () {
    var zeroOffset = '2000-03-15T05:20:10+0000';
    var expectedDate = '2000-03-15T05:20:10.000Z';
    var parsedDate = (0, _index.default)(zeroOffset);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses a fully formed ISO date without Z', function () {
    var date = '2000-03-15T05:20:10.123';
    var expectedDate = '2000-03-15T05:20:10.123Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses a fully formed ISO date without Z and with 6-digit millisecond part', function () {
    var date = '2000-03-15T05:20:10.123456';
    var expectedDate = '2000-03-15T05:20:10.123Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses a fully formed ISO with 1-digit millisecond part', function () {
    var date = '2000-03-15T05:20:10.1Z';
    var expectedDate = '2000-03-15T05:20:10.100Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses a fully formed ISO with 2-digit millisecond part', function () {
    var date = '2000-03-15T05:20:10.12Z';
    var expectedDate = '2000-03-15T05:20:10.120Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses supported formats with a space time separator instead of a T', function () {
    var date = '2000-03-15 05:20:10.123Z';
    var expectedDate = '2000-03-15T05:20:10.123Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses the SQL datetime format without milliseconds', function () {
    var date = '2000-03-15 05:20:10';
    var expectedDate = '2000-03-15T05:20:10.000Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('parses the SQL datetime format with up to 7 millisecond digits', function () {
    var date = '2000-03-15 05:20:10.1234567';
    var expectedDate = '2000-03-15T05:20:10.123Z';
    var parsedDate = (0, _index.default)(date);

    _assert.default.strictEqual(parsedDate.toISOString(), expectedDate);
  });
  it('returns an invalid date for anything else', function () {
    _assert.default.strictEqual((0, _index.default)('').toString(), 'Invalid Date');

    _assert.default.strictEqual((0, _index.default)('invalid').toString(), 'Invalid Date');

    _assert.default.strictEqual((0, _index.default)('2020-10-10').toString(), 'Invalid Date');
  });
});