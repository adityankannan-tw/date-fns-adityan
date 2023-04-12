"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('set', function () {
  it('sets all values', function () {
    var result = (0, _index.default)(new Date(2013, 0
    /* Jan */
    ), {
      year: 2014,
      month: 8,
      // Sep
      date: 20,
      hours: 12,
      minutes: 12,
      seconds: 12,
      milliseconds: 12
    });

    _assert.default.deepStrictEqual(result.toString(), new Date(2014, 8
    /* Sep */
    , 20, 12, 12, 12, 12).toString());
  });
  it('sets year', function () {
    var result = (0, _index.default)(new Date(2013, 8
    /* Sep */
    ), {
      year: 2014
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    ));
  });
  it('sets month', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    ), {
      month: 9
      /* Oct */

    });

    _assert.default.deepStrictEqual(result, new Date(2014, 9
    /* Oct */
    ));
  });
  it('sets day of month', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    ), {
      date: 20
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 20));
  });
  it('sets hours', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1), {
      hours: 12
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 12));
  });
  it('sets minutes', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 1), {
      minutes: 12
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 1, 12));
  });
  it('sets seconds', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 1, 1), {
      seconds: 12
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 1, 1, 12));
  });
  it('sets milliseconds', function () {
    var result = (0, _index.default)(new Date(2014, 8
    /* Sep */
    , 1, 1, 1, 1), {
      milliseconds: 500
    });

    _assert.default.deepStrictEqual(result, new Date(2014, 8
    /* Sep */
    , 1, 1, 1, 1, 500));
  });
  describe('value overflow', function () {
    it('months overflow into years', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), {
        month: 12
        /* 13th month */

      });

      _assert.default.deepStrictEqual(result, new Date(2015, 0
      /* Jan */
      , 1));
    });
    it('days of months overflow into months', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 1), {
        date: 31
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 9
      /* Oct */
      , 1));
    });
    it('hours overflow into days', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 19), {
        hours: 24
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 20));
    });
    it('minutes overflow into hours', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 20, 11), {
        minutes: 60
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 20, 12));
    });
    it('seconds overflow into minutes', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 20, 12, 58), {
        seconds: 60
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 20, 12, 59));
    });
    it('milliseconds overflow into seconds', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      , 20, 12, 58, 30), {
        milliseconds: 1000
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 20, 12, 58, 31));
    });
  });
  describe('edge cases', function () {
    it('sets January', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      ), {
        month: 0
        /* Jan */

      });

      _assert.default.deepStrictEqual(result, new Date(2014, 0
      /* Jan */
      ));
    });
    it('sets the last day of new month if the initial date was the last day of a longer month', function () {
      var result = (0, _index.default)(new Date(2014, 7
      /* Aug */
      , 31), {
        month: 8
        /* Sep */

      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      , 30));
    });
    it('ignores undefined values', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      ), {
        year: undefined
      });

      _assert.default.deepStrictEqual(result, new Date(2014, 8
      /* Sep */
      ));
    });
    it('returns Invalid Date if any value in values is NaN', function () {
      var result = (0, _index.default)(new Date(2014, 8
      /* Sep */
      ), {
        year: NaN
      });
      (0, _assert.default)(isNaN(result.getTime()));
    });
    it('returns Invalid Date the initial date was Invalid Date as well', function () {
      var result = (0, _index.default)(new Date(NaN), {
        year: 2019
      });
      (0, _assert.default)(isNaN(result.getTime()));
    });
  });
});