/*
  {
    dt: 1543827600,
    main: {
      temp: 11.13,
      temp_min: 11.13,
      temp_max: 11.13,
      pressure: 1000.04,
      sea_level: 1040.14,
      grnd_level: 1000.04,
      humidity: 100,
      temp_kf: 0,
    },
    weather: [{ id: 500, main: 'Rain', description: '小雨', icon: '10n' }],
    clouds: { all: 92 },
    wind: { speed: 1.07, deg: 228.506 },
    rain: { '3h': 1.57 },
    sys: { pod: 'n' },
    dt_txt: '2018-12-03 09:00:00',
  },
 */

export default class OpenWeatherMapForecast {
  constructor(forecast) {
    this.forecast = forecast;
  }
}
