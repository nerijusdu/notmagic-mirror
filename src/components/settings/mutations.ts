import { MutationTree } from "vuex";
import { SettingsState } from "./types";


export const mutations: MutationTree<SettingsState> = {
  save(state) {
    console.log('mutating state');
  }
};
