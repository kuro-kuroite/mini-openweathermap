"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateFns = require("date-fns");

var _open_weather_map = require("../../atoms/open_weather_map");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OpenWeatherMapForecastList =
/*#__PURE__*/
function () {
  function OpenWeatherMapForecastList(openWeatherMap) {
    _classCallCheck(this, OpenWeatherMapForecastList);

    this.info = new _open_weather_map.OpenWeatherMapInfo(openWeatherMap.city);
    this.forecasts = openWeatherMap.list;
    this.currentForecast = new _open_weather_map.OpenWeatherMapForecast(this.forecasts[0]).forecast;
  }

  _createClass(OpenWeatherMapForecastList, [{
    key: "filterForecastsByDateTime",
    value: function filterForecastsByDateTime(startAt) {
      var endAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _dateFns.endOfDay)(startAt);
      var start = this.toDate(startAt);
      var end = this.toDate(endAt);
      return this.filterForecasts(this.forecasts, function (forecast) {
        var dateTime = forecast.dt_txt;
        return (0, _dateFns.isAfter)(dateTime, start) && (0, _dateFns.isBefore)(dateTime, end);
      });
    }
  }, {
    key: "parseTime",
    value: function parseTime(dateTime) {
      return this.info.parseTime(dateTime);
    }
  }, {
    key: "format",
    value: function format(dateTime, formatString, options) {
      return this.info.format(dateTime, formatString, options);
    }
  }, {
    key: "toDate",
    value: function toDate(dateTime) {
      return this.info.toDate(dateTime);
    }
  }, {
    key: "zonedTimeToUtc",
    value: function zonedTimeToUtc(zonedTime) {
      return this.info.zonedTimeToUtc(zonedTime);
    }
  }, {
    key: "filterForecasts",
    value: function filterForecasts(forecasts, filterConditionCallback) {
      return forecasts.filter(filterConditionCallback);
    }
  }, {
    key: "reduceForecasts",
    value: function reduceForecasts(forecasts, reduceCallback, initializeValue) {
      return forecasts.reduce(reduceCallback, initializeValue);
    }
  }, {
    key: "maxTemperature",
    value: function maxTemperature(forecasts) {
      return this.reduceForecasts(forecasts, function (max, forecast) {
        var temperature = forecast.main.temp;
        return max >= temperature ? max : temperature;
      });
    }
  }, {
    key: "minTemperature",
    value: function minTemperature(forecasts) {
      return this.reduceForecasts(forecasts, function (min, forecast) {
        var temperature = forecast.main.temp;
        return min <= temperature ? min : temperature;
      });
    }
  }, {
    key: "changeForecasts",
    value: function changeForecasts(forecasts) {
      // NOTE: [1, 1, 1, 2, 2, 3, 1, 1] -> [1, 2, 3, 1]
      return this.reduceForecasts(forecasts, function (changeForecasts, forecast) {
        if (changeForecasts.length === 0) {
          changeForecasts.push(forecast);
        }

        var length = changeForecasts.length;
        var lastForecast = changeForecasts[length - 1];
        var lastForecastWeather = lastForecast.weather[0].main;
        var forecastWeather = forecast.weather[0].main;

        if (lastForecastWeather !== forecastWeather) {
          changeForecasts.push(forecast);
        }

        return changeForecasts;
      }, []).slice(1);
    }
  }, {
    key: "concatForecasts",
    value: function concatForecasts(forecasts, makeForecastStringCallback) {
      return forecasts.reduceRight(function (acc, forecast) {
        return "".concat(makeForecastStringCallback(forecast)).concat(acc);
      }, '');
    }
  }]);

  return OpenWeatherMapForecastList;
}();

exports.default = OpenWeatherMapForecastList;