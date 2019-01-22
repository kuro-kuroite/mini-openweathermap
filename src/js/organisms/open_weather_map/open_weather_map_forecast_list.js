import { endOfDay, isAfter, isBefore } from 'date-fns';
import {
  OpenWeatherMapForecast,
  OpenWeatherMapInfo,
} from '../../atoms/open_weather_map';

export default class OpenWeatherMapForecastList {
  constructor(openWeatherMap) {
    this.info = new OpenWeatherMapInfo(openWeatherMap.city);
    this.forecasts = openWeatherMap.list;
    this.currentForecast = new OpenWeatherMapForecast(
      this.forecasts[0],
    ).forecast;
  }

  filterForecastsByDateTime(startAt, endAt = endOfDay(startAt)) {
    const start = this.toDate(startAt);
    const end = this.toDate(endAt);

    return this.filterForecasts(this.forecasts, forecast => {
      const dateTime = forecast.dt_txt;

      return isAfter(dateTime, start) && isBefore(dateTime, end);
    });
  }

  parseTime(dateTime) {
    return this.info.parseTime(dateTime);
  }

  format(dateTime, formatString, options) {
    return this.info.format(dateTime, formatString, options);
  }

  toDate(dateTime) {
    return this.info.toDate(dateTime);
  }

  zonedTimeToUtc(zonedTime) {
    return this.info.zonedTimeToUtc(zonedTime);
  }

  filterForecasts(forecasts, filterConditionCallback) {
    return forecasts.filter(filterConditionCallback);
  }

  reduceForecasts(forecasts, reduceCallback, initializeValue) {
    return forecasts.reduce(reduceCallback, initializeValue);
  }

  maxTemperature(forecasts) {
    return this.reduceForecasts(forecasts, (max, forecast) => {
      const temperature = forecast.main.temp;

      return max >= temperature ? max : temperature;
    });
  }

  minTemperature(forecasts) {
    return this.reduceForecasts(forecasts, (min, forecast) => {
      const temperature = forecast.main.temp;

      return min <= temperature ? min : temperature;
    });
  }

  changeForecasts(forecasts) {
    // NOTE: [1, 1, 1, 2, 2, 3, 1, 1] -> [1, 2, 3, 1]
    return this.reduceForecasts(
      forecasts,
      (changeForecasts, forecast) => {
        if (changeForecasts.length === 0) {
          changeForecasts.push(forecast);
        }

        const length = changeForecasts.length;
        const lastForecast = changeForecasts[length - 1];
        const lastForecastWeather = lastForecast.weather[0].main;
        const forecastWeather = forecast.weather[0].main;
        if (lastForecastWeather !== forecastWeather) {
          changeForecasts.push(forecast);
        }

        return changeForecasts;
      },
      [],
    ).slice(1);
  }

  concatForecasts(forecasts, makeForecastStringCallback) {
    return forecasts.reduceRight((acc, forecast) => {
      return `${makeForecastStringCallback(forecast)}${acc}`;
    }, '');
  }
}
