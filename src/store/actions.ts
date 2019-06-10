import { WeatherModule } from '@components/weather';
import redditService from '@services/redditService';
import { RootState } from '@store/types';
import { ActionTree } from 'vuex';
import { getModule } from '.';

export const actions: ActionTree<RootState, RootState> = {
  async getWallpapers({ commit }) {
    const wallpapers = await redditService.getWallpapers();

    commit('updateWallpapers', wallpapers);
  },
  async init({ dispatch }) {
    await dispatch('getWallpapers');
    await getModule(WeatherModule).getWeather();
  }
};
