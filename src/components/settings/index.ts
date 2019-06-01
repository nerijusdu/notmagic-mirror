import { Module } from 'vuex';
import { RootState } from '@store/types';
import Settings from './component.vue';
import SettingsIcon from './settingsIcon.vue';
import { SettingsState } from './types';
import { actions } from './actions';
import { mutations } from './mutations';

export {
  Settings,
  SettingsIcon
};

export const state: SettingsState = {
  clock: {
    dateFormat: 'MMMM Mo, YYYY',
    timeFormat: 'HH:mm'
  }
};

export const module: Module<SettingsState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
};

export default Settings;
