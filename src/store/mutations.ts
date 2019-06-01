import { MutationTree } from "vuex";
import { RootState } from "./types";

export const mutations: MutationTree<RootState> = {
  updateWallpapers(state, wallpapers) {
    state.backgrounds = wallpapers;
  }
};
