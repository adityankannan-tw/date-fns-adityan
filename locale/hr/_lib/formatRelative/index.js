"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    switch (date.getDay()) {
      case 0:
        return "'prošlu nedjelju u' p";

      case 3:
        return "'prošlu srijedu u' p";

      case 6:
        return "'prošlu subotu u' p";

      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'jučer u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: function nextWeek(date) {
    switch (date.getDay()) {
      case 0:
        return "'iduću nedjelju u' p";

      case 3:
        return "'iduću srijedu u' p";

      case 6:
        return "'iduću subotu u' p";

      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  other: 'P'
};

var formatRelative = function formatRelative(token, date, _baseDate, _options) {
  var format = formatRelativeLocale[token];

  if (typeof format === 'function') {
    return format(date);
  }

  return format;
};

var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;