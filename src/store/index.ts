import { SettingsModule as settings } from '@components/settings';
import { WeatherModule as weather } from '@components/weather';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { getModule as getVuexModule, VuexModule } from 'vuex-module-decorators';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState } from './types';

Vue.use(Vuex);

const storeDefinition: StoreOptions<RootState> = {
  actions,
  mutations,
  state: {
    backgrounds: []
  },
  modules: {
    settings,
    weather
  }
};

const store = new Vuex.Store<RootState>(storeDefinition);

export function getModule<T extends VuexModule>(module: ConstructorOf<T>): T {
  return getVuexModule(module, store);
}

export default store;
