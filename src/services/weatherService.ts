import api from './api';
import { getConfig } from './configService';

class WeatherService {
  get secret() {
    const secrets = getConfig().secrets;
    return secrets ? secrets.weatherApi : '';
  }

  async getWeatherForCity(cityName: string) {
    const res = await api.get({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      params: {
        APPID: this.secret,
        q: cityName,
        units: 'metric'
      }
    });

    if (!res) {
      return null;
    }

    return {
      temp: res.data.main.temp,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      description: res.data.weather[0].description
    };
  }
}

const instance = new WeatherService();
export default instance;
