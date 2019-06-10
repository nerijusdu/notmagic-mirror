import redditService from '@services/redditService';
import { RootState } from '@store/types';
import { ActionTree } from 'vuex';

export const actions: ActionTree<RootState, RootState> = {
  async getWallpapers({ commit }) {
    const wallpapers = await redditService.getWallpapers();

    commit('updateWallpapers', wallpapers);
  },
  init({ dispatch }) {
    dispatch('getWallpapers');
  }
};
