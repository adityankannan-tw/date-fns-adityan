"use strict";

var _assert = _interopRequireDefault(require("assert"));

var _index = require("../_lib/test/index.js");

var _index2 = _interopRequireDefault(require("./index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */

/* global HTMLIFrameElement */
describe('isDate', function () {
  it('returns true if the given value is a date object', function () {
    (0, _assert.default)((0, _index2.default)(new Date()));
  });
  it('returns true if the given value is an Invalid Date', function () {
    (0, _assert.default)((0, _index2.default)(new Date(NaN)));
  });
  it('ensures that the passed argument is an instance of Date', function () {
    var date = new Date();

    if ((0, _index2.default)(date)) {
      (0, _index.assertType)(date);
    } else {
      (0, _index.assertType)(date);
    }
  });
  describe('with date passed from another iframe', function () {
    // Emulate web browser
    if (!process.env.JEST_WORKER_ID) {
      afterEach(function () {
        var iframe = document.getElementById('iframe');
        iframe && iframe.remove();
      });
      it('returns true for a date passed from another iframe', function (done) {
        var iframe = document.createElement('iframe');
        iframe.id = 'iframe';
        iframe.addEventListener('load', function () {
          execScript('window.date = new Date()'); // eslint-disable-line no-implied-eval

          (0, _assert.default)((0, _index2.default)(iframe.contentWindow.date));
          done();
        });
        if (!document.body) throw new Error('document.body is not defined');
        document.body.appendChild(iframe);
      });
    }

    function execScript(scriptText) {
      var iframe = document.querySelector('iframe#iframe');

      if (!iframe || !(iframe instanceof HTMLIFrameElement)) {
        throw new Error("Can't execute the script because iframe isn't found");
      }

      var doc = iframe.contentDocument;
      var script = doc.createElement('script');
      script.innerText = scriptText; // @ts-expect-error

      if (!(doc.body instanceof iframe.contentWindow.HTMLBodyElement)) {
        throw new Error("Can't execute the script because iframe does not have body");
      }

      doc.body.append(script);
    }
  });
  it('returns false if the given value is not a date object', function () {
    (0, _assert.default)(!(0, _index2.default)(new Date().getTime()));
    (0, _assert.default)(!(0, _index2.default)(new Date().toISOString()));
    (0, _assert.default)(!(0, _index2.default)({}));
    (0, _assert.default)(!(0, _index2.default)(null));
    (0, _assert.default)(!(0, _index2.default)(0));
  });
});