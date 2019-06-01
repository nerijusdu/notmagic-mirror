import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { module as settings } from '@components/settings';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
  },
  modules: {
    settings
  }
};

export default new Vuex.Store<RootState>(store);
