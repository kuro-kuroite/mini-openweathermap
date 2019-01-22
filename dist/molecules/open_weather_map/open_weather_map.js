"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OpenWeatherMap =
/*#__PURE__*/
function () {
  function OpenWeatherMap(apiKey) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$utils = _ref.utils,
        utils = _ref$utils === void 0 ? 'metric' : _ref$utils,
        _ref$city = _ref.city,
        city = _ref$city === void 0 ? 'Tokyo,JP' : _ref$city,
        args = _objectWithoutProperties(_ref, ["utils", "city"]);

    _classCallCheck(this, OpenWeatherMap);

    this.city = city;
    this.params = _objectSpread({
      utils: utils,
      appid: apiKey,
      q: city
    }, args);
    this.createConfig(this.params);
  }

  _createClass(OpenWeatherMap, [{
    key: "createConfig",
    value: function createConfig(params) {
      return {
        url: '/data/2.5/weather',
        method: 'get',
        baseUrl: 'http://api.openweathermap.org/',
        params: _objectSpread({}, params),
        timeout: 1000
      };
    }
  }, {
    key: "fetchCurrentWeather",
    value: function fetchCurrentWeather() {
      var city = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.city;
      (0, _axios.default)(this.createConfig(_objectSpread({
        q: city
      }, this.params))).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log('fetch no weather data');
      });
    }
  }, {
    key: "getForecasts",
    value: function getForecasts(openweather) {
      return openweather.list;
    }
  }, {
    key: "getCurrentForecast",
    value: function getCurrentForecast(openweather) {
      return openweather.list[0];
    }
  }, {
    key: "getCountry",
    value: function getCountry(openweather) {
      return openweather.city.country;
    }
  }, {
    key: "getForecastDateTime",
    value: function getForecastDateTime(forecast) {
      return forecast.dt_txt;
    }
  }, {
    key: "getTemperature",
    value: function getTemperature(forecast) {
      return forecast.main.temp;
    }
  }, {
    key: "getWeather",
    value: function getWeather(forecast) {
      return forecast.weather[0].main;
    }
  }, {
    key: "getWeatherObject",
    value: function getWeatherObject(forecast) {
      return forecast.weather[0];
    }
  }]);

  return OpenWeatherMap;
}();

exports.default = OpenWeatherMap;