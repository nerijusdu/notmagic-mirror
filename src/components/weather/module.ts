import weatherService from '@services/weatherService';
import store from '@store';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { Weather } from './types';

@Module({ store, namespaced: true, name: 'weather' })
export default class WeatherModule extends VuexModule {
  current: Weather | null = null;

  get hasData() {
    return this.current !== null;
  }

  @Mutation
  updateWeather(data: Weather | null) {
    this.current = data;
  }

  @Action({ commit: 'updateWeather' })
  async getWeather() {
    const weather = await weatherService.getWeatherForCity('Kaunas');

    return weather;
  }
}
