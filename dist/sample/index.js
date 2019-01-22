"use strict";

var _index = require("../index");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StringBuffer =
/*#__PURE__*/
function () {
  function StringBuffer() {
    _classCallCheck(this, StringBuffer);

    this.string = '';
  }

  _createClass(StringBuffer, [{
    key: "concatString",
    value: function concatString(string) {
      if (string === '') {
        return;
      }

      this.string += string + '\n';
    }
  }]);

  return StringBuffer;
}();

var result = _dotenv.default.config();

if (result.error) {
  throw result.error;
}

var apiKey = process.env.OPEN_WEATHER_MAP_KEY;

function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var openWeatherMapProxy, openWeather, forecastList, message, currentForecast, todayForecasts, changeForecasts, hasRain;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            openWeatherMapProxy = new _index.OpenWeatherMapProxy(apiKey, {
              city: 'Hachioji,JP',
              lang: 'ja'
            });
            _context.next = 3;
            return openWeatherMapProxy.fetchCurrentWeather();

          case 3:
            openWeather = _context.sent;
            forecastList = new _index.OpenWeatherMapForecastList(openWeather);
            message = new StringBuffer();
            currentForecast = forecastList.currentForecast;
            todayForecasts = forecastList.filterForecastsByDateTime(forecastList.toDate(currentForecast.dt_txt));
            changeForecasts = forecastList.changeForecasts(todayForecasts);
            message.concatString("\u305F\u3060\u4ECA\u306E\u5929\u6C17\u306F\uFF0C".concat(currentForecast.weather[0].description, "\u3067\uFF0C\u6C17\u6E29\u306F").concat(parseInt(currentForecast.main.temp), "\u5EA6\u3067\u3059\uFF0E"));
            message.concatString("\u6700\u9AD8\u6C17\u6E29\u306F, ".concat(parseInt(forecastList.maxTemperature(todayForecasts)), "\u5EA6\uFF0C\u6700\u4F4E\u6C17\u6E29\u306F").concat(parseInt(forecastList.minTemperature(todayForecasts)), "\u5EA6\u3067\u3059\uFF0E"));
            message.concatString(forecastList.concatForecasts(changeForecasts, function (forecast) {
              var utcDateTime = forecastList.zonedTimeToUtc(forecast.dt_txt);
              var time = forecastList.parseTime(utcDateTime);
              var weather = forecast.weather[0].description;
              return "".concat(time, "\u306B").concat(weather, "\u306B\u5909\u308F\u308A\u307E\u3059");
            }));
            hasRain = changeForecasts.some(function (forecast) {
              return forecast.weather[0].main === 'Rain';
            });

            if (hasRain) {
              message.concatString("\u96E8\u304C\u964D\u308B\u306E\u3067\uFF0C\u5098\u3092\u6301\u3063\u3066\u884C\u3063\u305F\u307B\u3046\u304C\u3044\u3044\u3067\u3057\u3087\u3046");
            }

            console.log(message.string);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _main.apply(this, arguments);
}

try {
  main();
} catch (e) {
  console.log(e);
}