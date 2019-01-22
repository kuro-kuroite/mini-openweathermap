"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ja = _interopRequireDefault(require("date-fns/locale/ja"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _dateFns = require("date-fns");

var _dateFnsTz = require("date-fns-tz");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OpenWeatherMapList =
/*#__PURE__*/
function () {
  function OpenWeatherMapList(openweather) {
    _classCallCheck(this, OpenWeatherMapList);

    this.openweather = openweather;

    if (this.openweather.getCountry(openweather) === 'US') {
      this.language = _enUS.default;
      this.language.code = 'en-US';
      this.language.timeZone = 'America/New_York';
    } else if (this.openweather.getCountry(openweather) === 'JP') {
      this.language = _ja.default;
      this.language.code = 'ja-JP';
      this.language.timeZone = 'Asia/Tokyo';
    }
  }

  _createClass(OpenWeatherMapList, [{
    key: "filterForecastsDateTime",
    value: function filterForecastsDateTime() {
      var _this = this;

      var openweather = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather;
      var startAt = arguments.length > 1 ? arguments[1] : undefined;
      var endAt = arguments.length > 2 ? arguments[2] : undefined;
      var start = (0, _dateFnsTz.toDate)(startAt);
      var end = (0, _dateFnsTz.toDate)(endAt);
      return this.filterForecasts(openweather, function (forecast) {
        var dateTime = _this.openweather.getForecastDateTime(forecast);

        return (0, _dateFns.isAfter)(dateTime, start) || (0, _dateFns.isBefore)(dateTime, end);
      });
    }
  }, {
    key: "filterForecastsSomeDay",
    value: function filterForecastsSomeDay() {
      var openweather = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather;
      var startAt = arguments.length > 1 ? arguments[1] : undefined;
      return this.filterForecastsDateTime(openweather, startAt, (0, _dateFns.endOfDay)(startAt));
    }
  }, {
    key: "filterForecasts",
    value: function filterForecasts() {
      var openweather = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather;
      var filterConditionCallback = arguments.length > 1 ? arguments[1] : undefined;
      return this.openweather.getForecasts(openweather).filter(function (forecast) {
        return filterConditionCallback(forecast);
      });
    }
  }, {
    key: "maxTemperature",
    value: function maxTemperature() {
      var _this2 = this;

      var openweather = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather;
      var startAt = arguments.length > 1 ? arguments[1] : undefined;
      return this.filterForecastsSomeDay(openweather, startAt).reduce(function (max, forecast) {
        var temperature = _this2.openweather.getTemperature(forecast);

        return max >= temperature ? max : temperature;
      });
    }
  }, {
    key: "minTemperature",
    value: function minTemperature() {
      var openweather = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather;
      var startAt = arguments.length > 1 ? arguments[1] : undefined;
      return this.filterForecastsSomeDay(openweather, startAt).reduce(function (min, forecast) {
        var temperature = openweather.getTemperature(forecast);
        return min <= temperature ? min : temperature;
      });
    }
  }, {
    key: "changeWeathers",
    value: function changeWeathers() {
      var _this3 = this;

      var openweather = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather;
      var startAt = arguments.length > 1 ? arguments[1] : undefined;
      return this.filterForecastsSomeDay(openweather, startAt).reduce(function (changeForecasts, forecast) {
        var length = changeForecasts.length;

        if (length === 0 || _this3.openweather.getWeather(changeForecasts[length - 1]) !== _this3.openweather.getWeather(forecast)) {
          changeForecasts.push(forecast);
        }

        return changeForecasts;
      }, []).slice(1);
    }
  }, {
    key: "concatForecasts",
    value: function concatForecasts() {
      var _this4 = this;

      var forecasts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.openweather.getForecasts(this.openweather);
      var createForecastStringCallback = arguments.length > 1 ? arguments[1] : undefined;
      return forecasts.reduceRight(function (acc, forecast) {
        var temperature = _this4.openweather.getTemperature(forecast);

        var weatherObject = _this4.openweather.getWeatherObject(forecast);

        var dateTime = _this4.openweather.getForecastDateTime(forecast);

        return "".concat(createForecastStringCallback({
          temperature: temperature,
          weatherObject: weatherObject,
          dateTime: dateTime
        })).concat(acc);
      }, '');
    }
  }]);

  return OpenWeatherMapList;
}();

exports.default = OpenWeatherMapList;