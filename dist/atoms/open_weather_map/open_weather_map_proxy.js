"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OpenWeatherMapProxy =
/*#__PURE__*/
function () {
  function OpenWeatherMapProxy(apiKey) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$units = _ref.units,
        units = _ref$units === void 0 ? 'metric' : _ref$units,
        _ref$city = _ref.city,
        city = _ref$city === void 0 ? 'Tokyo,JP' : _ref$city,
        _ref$lang = _ref.lang,
        lang = _ref$lang === void 0 ? 'en' : _ref$lang,
        args = _objectWithoutProperties(_ref, ["units", "city", "lang"]);

    _classCallCheck(this, OpenWeatherMapProxy);

    this.params = _objectSpread({
      units: units,
      appid: apiKey,
      q: city,
      lang: lang
    }, args);
    this.openweather = null;
  }

  _createClass(OpenWeatherMapProxy, [{
    key: "createConfig",
    value: function createConfig(params) {
      return {
        url: 'data/2.5/forecast',
        method: 'get',
        baseURL: 'http://api.openweathermap.org/',
        params: _objectSpread({}, params),
        timeout: 1000
      };
    }
  }, {
    key: "fetchCurrentWeather",
    value: function () {
      var _fetchCurrentWeather = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var city,
            res,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                city = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.params.city;
                this.params = _objectSpread({
                  q: city
                }, this.params);
                _context.next = 4;
                return _axios.default.request(this.createConfig(this.params));

              case 4:
                res = _context.sent;
                this.openweather = res.data;
                return _context.abrupt("return", this.openweather);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchCurrentWeather() {
        return _fetchCurrentWeather.apply(this, arguments);
      }

      return fetchCurrentWeather;
    }()
  }]);

  return OpenWeatherMapProxy;
}();

exports.default = OpenWeatherMapProxy;