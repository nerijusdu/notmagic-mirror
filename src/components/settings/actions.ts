import { ActionTree } from "vuex";
import { SettingsState } from "./types";
import { RootState } from "@store/types";


export const actions: ActionTree<SettingsState, RootState> = {
  save({ commit }): any {
    commit('save');
  }
};
