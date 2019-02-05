import ja from 'date-fns/locale/ja';
import enUS from 'date-fns/locale/en-US';
import { format, toDate, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import '../dirty_date_fns';

/*
  city: {
    id: 1863440,
    name: 'Hachioji',
    coord: { lat: 35.6558, lon: 139.3239 },
    country: 'JP',
    population: 579399,
  },
 */

export default class OpenWeatherMapInfo {
  constructor(city) {
    this.city = city;

    if (this.city.country === 'US') {
      this.language = enUS;
      this.language.code = 'en-US';
      this.language.timeZone = 'America/New_York';
    } else if (this.city.country === 'JP') {
      this.language = ja;
      this.language.code = 'ja-JP';
      this.language.timeZone = 'Asia/Tokyo';
    }
  }

  parseTime(utcDateTime) {
    return this.format(utcDateTime, 'BBBB p', {
      locale: this.language,
      timeZone: this.language.timeZone,
      awareOfUnicodeTokens: true,
    });
  }

  format(utcDateTime, formatString, options) {
    const localDateTime = utcToZonedTime(utcDateTime, this.language.timeZone);

    return format(localDateTime, formatString, options);
  }

  toDate(dateTime) {
    return toDate(dateTime, { timeZone: this.language.code });
  }

  zonedTimeToUtc(zonedTime) {
    return zonedTimeToUtc(zonedTime, this.language.timeZone);
  }
}
