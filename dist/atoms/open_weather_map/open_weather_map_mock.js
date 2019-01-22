"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _open_weather_map_proxy = _interopRequireDefault(require("./open_weather_map_proxy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var OpenWeatherMapMock =
/*#__PURE__*/
function (_OpenWeatherMapProxy) {
  _inherits(OpenWeatherMapMock, _OpenWeatherMapProxy);

  function OpenWeatherMapMock(apiKey, options) {
    _classCallCheck(this, OpenWeatherMapMock);

    return _possibleConstructorReturn(this, _getPrototypeOf(OpenWeatherMapMock).call(this, apiKey, options));
  }

  _createClass(OpenWeatherMapMock, [{
    key: "fetchCurrentWeather",
    value: function () {
      var _fetchCurrentWeather = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var city,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                city = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.params.city;
                this.params = _objectSpread({
                  q: city
                }, this.params);
                this.openweather = {
                  cod: '200',
                  message: 0.0051,
                  cnt: 35,
                  list: [{
                    dt: 1548169200,
                    main: {
                      temp: -0.43,
                      temp_min: -0.43,
                      temp_max: 1.55,
                      pressure: 1023.87,
                      sea_level: 1027.87,
                      grnd_level: 1023.87,
                      humidity: 100,
                      temp_kf: -1.98
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 1.96,
                      deg: 42.5051
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-22 15:00:00'
                  }, {
                    dt: 1548180000,
                    main: {
                      temp: -0.82,
                      temp_min: -0.82,
                      temp_max: 0.5,
                      pressure: 1023.62,
                      sea_level: 1027.64,
                      grnd_level: 1023.62,
                      humidity: 100,
                      temp_kf: -1.32
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 1.36,
                      deg: 16.5021
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-22 18:00:00'
                  }, {
                    dt: 1548190800,
                    main: {
                      temp: -0.55,
                      temp_min: -0.55,
                      temp_max: 0.11,
                      pressure: 1023.05,
                      sea_level: 1027,
                      grnd_level: 1023.05,
                      humidity: 100,
                      temp_kf: -0.66
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 1.81,
                      deg: 354.003
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-22 21:00:00'
                  }, {
                    dt: 1548201600,
                    main: {
                      temp: 5.86,
                      temp_min: 5.86,
                      temp_max: 5.86,
                      pressure: 1022.73,
                      sea_level: 1026.7,
                      grnd_level: 1022.73,
                      humidity: 92,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 1.96,
                      deg: 336.503
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-23 00:00:00'
                  }, {
                    dt: 1548212400,
                    main: {
                      temp: 9.94,
                      temp_min: 9.94,
                      temp_max: 9.94,
                      pressure: 1019.79,
                      sea_level: 1023.64,
                      grnd_level: 1019.79,
                      humidity: 74,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 1.81,
                      deg: 221.002
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-23 03:00:00'
                  }, {
                    dt: 1548223200,
                    main: {
                      temp: 12.17,
                      temp_min: 12.17,
                      temp_max: 12.17,
                      pressure: 1016.81,
                      sea_level: 1020.78,
                      grnd_level: 1016.81,
                      humidity: 63,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 4.56,
                      deg: 234.501
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-23 06:00:00'
                  }, {
                    dt: 1548234000,
                    main: {
                      temp: 10.91,
                      temp_min: 10.91,
                      temp_max: 10.91,
                      pressure: 1015.97,
                      sea_level: 1020.11,
                      grnd_level: 1015.97,
                      humidity: 66,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 5.1,
                      deg: 238.502
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-23 09:00:00'
                  }, {
                    dt: 1548244800,
                    main: {
                      temp: 9.26,
                      temp_min: 9.26,
                      temp_max: 9.26,
                      pressure: 1016.36,
                      sea_level: 1020.38,
                      grnd_level: 1016.36,
                      humidity: 73,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 5.12,
                      deg: 250.502
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-23 12:00:00'
                  }, {
                    dt: 1548255600,
                    main: {
                      temp: 9.37,
                      temp_min: 9.37,
                      temp_max: 9.37,
                      pressure: 1016.56,
                      sea_level: 1020.59,
                      grnd_level: 1016.56,
                      humidity: 70,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 5.71,
                      deg: 245.004
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-23 15:00:00'
                  }, {
                    dt: 1548266400,
                    main: {
                      temp: 5.07,
                      temp_min: 5.07,
                      temp_max: 5.07,
                      pressure: 1019.68,
                      sea_level: 1023.65,
                      grnd_level: 1019.68,
                      humidity: 84,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 6.95,
                      deg: 0.503082
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-23 18:00:00'
                  }, {
                    dt: 1548277200,
                    main: {
                      temp: 4.08,
                      temp_min: 4.08,
                      temp_max: 4.08,
                      pressure: 1021.29,
                      sea_level: 1025.25,
                      grnd_level: 1021.29,
                      humidity: 86,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 801,
                      main: 'Clouds',
                      description: '薄い雲',
                      icon: '02n'
                    }],
                    clouds: {
                      all: 20
                    },
                    wind: {
                      speed: 5.87,
                      deg: 1.51151
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-23 21:00:00'
                  }, {
                    dt: 1548288000,
                    main: {
                      temp: 5.81,
                      temp_min: 5.81,
                      temp_max: 5.81,
                      pressure: 1022.79,
                      sea_level: 1026.75,
                      grnd_level: 1022.79,
                      humidity: 80,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 4.74,
                      deg: 348.505
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-24 00:00:00'
                  }, {
                    dt: 1548298800,
                    main: {
                      temp: 8.82,
                      temp_min: 8.82,
                      temp_max: 8.82,
                      pressure: 1021.73,
                      sea_level: 1025.6,
                      grnd_level: 1021.73,
                      humidity: 70,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 3.46,
                      deg: 342.001
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-24 03:00:00'
                  }, {
                    dt: 1548309600,
                    main: {
                      temp: 9.41,
                      temp_min: 9.41,
                      temp_max: 9.41,
                      pressure: 1021.4,
                      sea_level: 1025.32,
                      grnd_level: 1021.4,
                      humidity: 64,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 4.39,
                      deg: 355.502
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-24 06:00:00'
                  }, {
                    dt: 1548320400,
                    main: {
                      temp: 6.58,
                      temp_min: 6.58,
                      temp_max: 6.58,
                      pressure: 1024.05,
                      sea_level: 1028.19,
                      grnd_level: 1024.05,
                      humidity: 71,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 8.74,
                      deg: 348.002
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-24 09:00:00'
                  }, {
                    dt: 1548331200,
                    main: {
                      temp: 4.97,
                      temp_min: 4.97,
                      temp_max: 4.97,
                      pressure: 1026.56,
                      sea_level: 1030.75,
                      grnd_level: 1026.56,
                      humidity: 75,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 9.66,
                      deg: 350.501
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-24 12:00:00'
                  }, {
                    dt: 1548342000,
                    main: {
                      temp: 4.31,
                      temp_min: 4.31,
                      temp_max: 4.31,
                      pressure: 1027.58,
                      sea_level: 1031.83,
                      grnd_level: 1027.58,
                      humidity: 79,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 9.31,
                      deg: 352
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-24 15:00:00'
                  }, {
                    dt: 1548352800,
                    main: {
                      temp: 4.07,
                      temp_min: 4.07,
                      temp_max: 4.07,
                      pressure: 1028.35,
                      sea_level: 1032.33,
                      grnd_level: 1028.35,
                      humidity: 80,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 8.06,
                      deg: 350.5
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-24 18:00:00'
                  }, {
                    dt: 1548363600,
                    main: {
                      temp: 3.53,
                      temp_min: 3.53,
                      temp_max: 3.53,
                      pressure: 1028.73,
                      sea_level: 1032.82,
                      grnd_level: 1028.73,
                      humidity: 86,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 6.38,
                      deg: 356.001
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-24 21:00:00'
                  }, {
                    dt: 1548374400,
                    main: {
                      temp: 4.99,
                      temp_min: 4.99,
                      temp_max: 4.99,
                      pressure: 1029.78,
                      sea_level: 1033.88,
                      grnd_level: 1029.78,
                      humidity: 81,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 801,
                      main: 'Clouds',
                      description: '薄い雲',
                      icon: '02d'
                    }],
                    clouds: {
                      all: 12
                    },
                    wind: {
                      speed: 4.66,
                      deg: 2.50049
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-25 00:00:00'
                  }, {
                    dt: 1548385200,
                    main: {
                      temp: 6.81,
                      temp_min: 6.81,
                      temp_max: 6.81,
                      pressure: 1028.04,
                      sea_level: 1031.93,
                      grnd_level: 1028.04,
                      humidity: 75,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 802,
                      main: 'Clouds',
                      description: '雲',
                      icon: '03d'
                    }],
                    clouds: {
                      all: 48
                    },
                    wind: {
                      speed: 2.76,
                      deg: 17.502
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-25 03:00:00'
                  }, {
                    dt: 1548396000,
                    main: {
                      temp: 7.18,
                      temp_min: 7.18,
                      temp_max: 7.18,
                      pressure: 1026.48,
                      sea_level: 1030.41,
                      grnd_level: 1026.48,
                      humidity: 71,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 803,
                      main: 'Clouds',
                      description: '曇りがち',
                      icon: '04d'
                    }],
                    clouds: {
                      all: 80
                    },
                    wind: {
                      speed: 1.12,
                      deg: 21.5012
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-25 06:00:00'
                  }, {
                    dt: 1548406800,
                    main: {
                      temp: 5.81,
                      temp_min: 5.81,
                      temp_max: 5.81,
                      pressure: 1026.32,
                      sea_level: 1030.19,
                      grnd_level: 1026.32,
                      humidity: 78,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 804,
                      main: 'Clouds',
                      description: '厚い雲',
                      icon: '04n'
                    }],
                    clouds: {
                      all: 92
                    },
                    wind: {
                      speed: 1.07,
                      deg: 58.004
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-25 09:00:00'
                  }, {
                    dt: 1548417600,
                    main: {
                      temp: 5.05,
                      temp_min: 5.05,
                      temp_max: 5.05,
                      pressure: 1025.63,
                      sea_level: 1029.61,
                      grnd_level: 1025.63,
                      humidity: 84,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 804,
                      main: 'Clouds',
                      description: '厚い雲',
                      icon: '04n'
                    }],
                    clouds: {
                      all: 92
                    },
                    wind: {
                      speed: 1.62,
                      deg: 70.502
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-25 12:00:00'
                  }, {
                    dt: 1548428400,
                    main: {
                      temp: 4.18,
                      temp_min: 4.18,
                      temp_max: 4.18,
                      pressure: 1024.38,
                      sea_level: 1028.33,
                      grnd_level: 1024.38,
                      humidity: 97,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 500,
                      main: 'Rain',
                      description: '小雨',
                      icon: '10n'
                    }],
                    clouds: {
                      all: 80
                    },
                    wind: {
                      speed: 1.37,
                      deg: 18.0002
                    },
                    rain: {
                      '3h': 0.01
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-25 15:00:00'
                  }, {
                    dt: 1548439200,
                    main: {
                      temp: 2.88,
                      temp_min: 2.88,
                      temp_max: 2.88,
                      pressure: 1022.54,
                      sea_level: 1026.45,
                      grnd_level: 1022.54,
                      humidity: 100,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 802,
                      main: 'Clouds',
                      description: '雲',
                      icon: '03n'
                    }],
                    clouds: {
                      all: 48
                    },
                    wind: {
                      speed: 0.41,
                      deg: 105.502
                    },
                    rain: {},
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-25 18:00:00'
                  }, {
                    dt: 1548450000,
                    main: {
                      temp: 1.65,
                      temp_min: 1.65,
                      temp_max: 1.65,
                      pressure: 1019.33,
                      sea_level: 1023.45,
                      grnd_level: 1019.33,
                      humidity: 100,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 2.36,
                      deg: 139
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-25 21:00:00'
                  }, {
                    dt: 1548460800,
                    main: {
                      temp: 5.77,
                      temp_min: 5.77,
                      temp_max: 5.77,
                      pressure: 1017.79,
                      sea_level: 1021.77,
                      grnd_level: 1017.79,
                      humidity: 93,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 3.11,
                      deg: 317.002
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-26 00:00:00'
                  }, {
                    dt: 1548471600,
                    main: {
                      temp: 6.4,
                      temp_min: 6.4,
                      temp_max: 6.4,
                      pressure: 1016.78,
                      sea_level: 1020.52,
                      grnd_level: 1016.78,
                      humidity: 84,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01d'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 6.62,
                      deg: 345.001
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-26 03:00:00'
                  }, {
                    dt: 1548482400,
                    main: {
                      temp: 6.67,
                      temp_min: 6.67,
                      temp_max: 6.67,
                      pressure: 1015.35,
                      sea_level: 1019.26,
                      grnd_level: 1015.35,
                      humidity: 83,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 802,
                      main: 'Clouds',
                      description: '雲',
                      icon: '03d'
                    }],
                    clouds: {
                      all: 32
                    },
                    wind: {
                      speed: 6.36,
                      deg: 6.51166
                    },
                    sys: {
                      pod: 'd'
                    },
                    dt_txt: '2019-01-26 06:00:00'
                  }, {
                    dt: 1548493200,
                    main: {
                      temp: 5.22,
                      temp_min: 5.22,
                      temp_max: 5.22,
                      pressure: 1017.19,
                      sea_level: 1021.04,
                      grnd_level: 1017.19,
                      humidity: 86,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 500,
                      main: 'Rain',
                      description: '小雨',
                      icon: '10n'
                    }],
                    clouds: {
                      all: 44
                    },
                    wind: {
                      speed: 6.51,
                      deg: 355.001
                    },
                    rain: {
                      '3h': 0.0525
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-26 09:00:00'
                  }, {
                    dt: 1548504000,
                    main: {
                      temp: 3.49,
                      temp_min: 3.49,
                      temp_max: 3.49,
                      pressure: 1019.24,
                      sea_level: 1023.04,
                      grnd_level: 1019.24,
                      humidity: 87,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 500,
                      main: 'Rain',
                      description: '小雨',
                      icon: '10n'
                    }],
                    clouds: {
                      all: 64
                    },
                    wind: {
                      speed: 7.61,
                      deg: 347.001
                    },
                    rain: {
                      '3h': 0.0125
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-26 12:00:00'
                  }, {
                    dt: 1548514800,
                    main: {
                      temp: 2.68,
                      temp_min: 2.68,
                      temp_max: 2.68,
                      pressure: 1019.65,
                      sea_level: 1023.61,
                      grnd_level: 1019.65,
                      humidity: 88,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 500,
                      main: 'Rain',
                      description: '小雨',
                      icon: '10n'
                    }],
                    clouds: {
                      all: 12
                    },
                    wind: {
                      speed: 7.96,
                      deg: 330.002
                    },
                    rain: {
                      '3h': 0.025
                    },
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-26 15:00:00'
                  }, {
                    dt: 1548525600,
                    main: {
                      temp: 2.67,
                      temp_min: 2.67,
                      temp_max: 2.67,
                      pressure: 1020.27,
                      sea_level: 1024.1,
                      grnd_level: 1020.27,
                      humidity: 86,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 802,
                      main: 'Clouds',
                      description: '雲',
                      icon: '03n'
                    }],
                    clouds: {
                      all: 32
                    },
                    wind: {
                      speed: 8.71,
                      deg: 329.501
                    },
                    rain: {},
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-26 18:00:00'
                  }, {
                    dt: 1548536400,
                    main: {
                      temp: 3.4,
                      temp_min: 3.4,
                      temp_max: 3.4,
                      pressure: 1022.22,
                      sea_level: 1026.04,
                      grnd_level: 1022.22,
                      humidity: 88,
                      temp_kf: 0
                    },
                    weather: [{
                      id: 800,
                      main: 'Clear',
                      description: '晴天',
                      icon: '01n'
                    }],
                    clouds: {
                      all: 0
                    },
                    wind: {
                      speed: 8.26,
                      deg: 333.002
                    },
                    rain: {},
                    sys: {
                      pod: 'n'
                    },
                    dt_txt: '2019-01-26 21:00:00'
                  }],
                  city: {
                    id: 1850147,
                    name: 'Tokyo',
                    coord: {
                      lat: 35.6828,
                      lon: 139.759
                    },
                    country: 'JP',
                    population: 8336599
                  }
                };
                return _context.abrupt("return", this.openweather);

              case 4:
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

  return OpenWeatherMapMock;
}(_open_weather_map_proxy.default);

exports.default = OpenWeatherMapMock;