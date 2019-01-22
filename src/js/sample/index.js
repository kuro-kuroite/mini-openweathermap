import { OpenWeatherMapProxy, OpenWeatherMapForecastList } from '../index';
import dotenv from 'dotenv';

class StringBuffer {
  constructor() {
    this.string = '';
  }

  concatString(string) {
    if (string === '') {
      return;
    }

    this.string += string + '\n';
  }
}

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

const apiKey = process.env.OPEN_WEATHER_MAP_KEY;

async function main() {
  const openWeatherMapProxy = new OpenWeatherMapProxy(apiKey, {
    city: 'Hachioji,JP',
    lang: 'ja',
  });
  const openWeather = await openWeatherMapProxy.fetchCurrentWeather();

  const forecastList = new OpenWeatherMapForecastList(openWeather);
  const message = new StringBuffer();

  const currentForecast = forecastList.currentForecast;
  const todayForecasts = forecastList.filterForecastsByDateTime(
    forecastList.toDate(currentForecast.dt_txt),
  );
  const changeForecasts = forecastList.changeForecasts(todayForecasts);

  message.concatString(
    `ただ今の天気は，${
      currentForecast.weather[0].description
    }で，気温は${parseInt(currentForecast.main.temp)}度です．`,
  );
  message.concatString(
    `最高気温は, ${parseInt(
      forecastList.maxTemperature(todayForecasts),
    )}度，最低気温は${parseInt(
      forecastList.minTemperature(todayForecasts),
    )}度です．`,
  );
  message.concatString(
    forecastList.concatForecasts(changeForecasts, forecast => {
      const utcDateTime = forecastList.zonedTimeToUtc(forecast.dt_txt);
      const time = forecastList.parseTime(utcDateTime);
      const weather = forecast.weather[0].description;

      return `${time}に${weather}に変わります`;
    }),
  );

  const hasRain = changeForecasts.some(
    forecast => forecast.weather[0].main === 'Rain',
  );
  if (hasRain) {
    message.concatString(`雨が降るので，傘を持って行ったほうがいいでしょう`);
  }

  console.log(message.string);
}

try {
  main();
} catch (e) {
  console.log(e);
}
