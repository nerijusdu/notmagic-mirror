import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { module as settings } from '@components/settings';
import { actions } from './actions';
import { mutations } from './mutations';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    backgrounds: []
  },
  actions,
  mutations,
  modules: {
    settings
  }
};

export default new Vuex.Store<RootState>(store);
