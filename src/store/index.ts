import { SettingsModule as settings } from '@components/settings';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { getModule as getVuexModule, VuexModule } from 'vuex-module-decorators';
import { actions } from './actions';
import { mutations } from './mutations';
import { RootState } from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  actions,
  mutations,
  state: {
    backgrounds: []
  },
  modules: {
    settings
  }
};

const storeInstance = new Vuex.Store<RootState>(store);

export function getModule<T extends VuexModule>(module: ConstructorOf<T>): T {
  return getVuexModule(module, storeInstance);
}

export default storeInstance;
