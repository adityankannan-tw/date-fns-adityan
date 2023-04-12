/* eslint-env mocha */

/* global HTMLIFrameElement */
import assert from 'assert';
import { assertType } from "../_lib/test/index.js";
import isDate from "./index.js";
describe('isDate', function () {
  it('returns true if the given value is a date object', function () {
    assert(isDate(new Date()));
  });
  it('returns true if the given value is an Invalid Date', function () {
    assert(isDate(new Date(NaN)));
  });
  it('ensures that the passed argument is an instance of Date', function () {
    var date = new Date();

    if (isDate(date)) {
      assertType(date);
    } else {
      assertType(date);
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

          assert(isDate(iframe.contentWindow.date));
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
    assert(!isDate(new Date().getTime()));
    assert(!isDate(new Date().toISOString()));
    assert(!isDate({}));
    assert(!isDate(null));
    assert(!isDate(0));
  });
});