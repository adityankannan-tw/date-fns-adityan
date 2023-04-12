"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var accusativeWeekdays = ['neděli', 'pondělí', 'úterý', 'středu', 'čtvrtek', 'pátek', 'sobotu'];
var formatRelativeLocale = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: function nextWeek(date) {
    var day = date.getDay();
    return "'v " + accusativeWeekdays[day] + " o' p";
  },
  other: 'P'
};

var formatRelative = function formatRelative(token, date) {
  var format = formatRelativeLocale[token];

  if (typeof format === 'function') {
    return format(date);
  }

  return format;
};

var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;