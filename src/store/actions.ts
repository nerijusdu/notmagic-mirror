import { ActionTree } from "vuex";
import { RootState } from "@store/types";
import redditService from '@services/redditService';

export const actions: ActionTree<RootState, RootState> = {
  async getWallpapers({ commit }) {
    const wallpapers = await redditService.getWallpapers();

    commit('updateWallpapers', wallpapers);
  },
  init({ dispatch }) {
    dispatch('getWallpapers');
  }
};
