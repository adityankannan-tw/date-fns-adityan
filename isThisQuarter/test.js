"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _sinon = _interopRequireDefault(require("sinon"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('isThisQuarter', function () {
  var clock;
  beforeEach(function () {
    clock = _sinon.default.useFakeTimers(new Date(2014, 8
    /* Sep */
    , 25).getTime());
  });
  afterEach(function () {
    clock.restore();
  });
  it('returns true if the given date and the current date have the same quarter (and year)', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2);
    (0, _assert.default)((0, _index.default)(date) === true);
  });
  it('returns false if the given date and the current date have different quarters', function () {
    var date = new Date(2014, 1
    /* Feb */
    , 11);
    (0, _assert.default)((0, _index.default)(date) === false);
  });
  it('accepts a timestamp', function () {
    var date = new Date(2014, 6
    /* Jul */
    , 2).getTime();
    (0, _assert.default)((0, _index.default)(date) === true);
  });
});