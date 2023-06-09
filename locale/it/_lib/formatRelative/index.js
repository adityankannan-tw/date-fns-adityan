"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../../../../isSameWeek/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weekdays = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];

function _lastWeek(day) {
  switch (day) {
    case 0:
      return "'domenica scorsa alle' p";

    default:
      return "'" + weekdays[day] + " scorso alle' p";
  }
}

function thisWeek(day) {
  return "'" + weekdays[day] + " alle' p";
}

function _nextWeek(day) {
  switch (day) {
    case 0:
      return "'domenica prossima alle' p";

    default:
      return "'" + weekdays[day] + " prossimo alle' p";
  }
}

var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getDay();

    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getDay();

    if ((0, _index.default)(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _nextWeek(day);
    }
  },
  other: 'P'
};

var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];

  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }

  return format;
};

var _default = formatRelative;
exports.default = _default;
module.exports = exports.default;