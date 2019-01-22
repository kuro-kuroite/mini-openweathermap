import axios from 'axios';

export default class OpenWeatherMapProxy {
  constructor(
    apiKey,
    { units = 'metric', city = 'Tokyo,JP', lang = 'en', ...args } = {},
  ) {
    this.params = { units, appid: apiKey, q: city, lang, ...args };
    this.openweather = null;
  }

  createConfig(params) {
    return {
      url: 'data/2.5/forecast',
      method: 'get',
      baseURL: 'http://api.openweathermap.org/',
      params: {
        ...params,
      },
      timeout: 1000,
    };
  }

  async fetchCurrentWeather(city = this.params.city) {
    this.params = { q: city, ...this.params };
    const res = await axios.request(this.createConfig(this.params));
    this.openweather = res.data;

    return this.openweather;
  }
}
