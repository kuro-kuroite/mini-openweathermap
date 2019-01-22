"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ja = _interopRequireDefault(require("date-fns/locale/ja"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _dateFnsTz = require("date-fns-tz");

require("../dirty_date_fns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  city: {
    id: 1863440,
    name: 'Hachioji',
    coord: { lat: 35.6558, lon: 139.3239 },
    country: 'JP',
    population: 579399,
  },
 */
var OpenWeatherMapInfo =
/*#__PURE__*/
function () {
  function OpenWeatherMapInfo(city) {
    _classCallCheck(this, OpenWeatherMapInfo);

    this.city = city;

    if (this.city.country === 'US') {
      this.language = _enUS.default;
      this.language.code = 'en-US';
      this.language.timeZone = 'America/New_York';
    } else if (this.city.country === 'JP') {
      this.language = _ja.default;
      this.language.code = 'ja-JP';
      this.language.timeZone = 'Asia/Tokyo';
    }
  }

  _createClass(OpenWeatherMapInfo, [{
    key: "parseTime",
    value: function parseTime(utcDateTime) {
      return this.format(dateTime, 'BBBB p', {
        locale: this.language,
        timeZone: this.language.timeZone,
        awareOfUnicodeTokens: true
      });
    }
  }, {
    key: "format",
    value: function format(utcDateTime, formatString, options) {
      var localDateTime = (0, _dateFnsTz.utcToZonedTime)(utcDateTime, this.language.timeZone);
      return (0, _dateFnsTz.format)(localDateTime, formatString, options);
    }
  }, {
    key: "toDate",
    value: function toDate(dateTime) {
      return (0, _dateFnsTz.toDate)(dateTime, {
        timeZone: this.language.code
      });
    }
  }, {
    key: "zonedTimeToUtc",
    value: function zonedTimeToUtc(zonedTime) {
      return (0, _dateFnsTz.zonedTimeToUtc)(zonedTime, this.language.timeZone);
    }
  }]);

  return OpenWeatherMapInfo;
}();

exports.default = OpenWeatherMapInfo;