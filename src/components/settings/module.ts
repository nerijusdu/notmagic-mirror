import store from '@store';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { BackgroundsSettings, ClockSettings } from './types';

@Module({ store, namespaced: true, name: 'settings' })
export default class SettingsModule extends VuexModule {
  background: BackgroundsSettings = {
    changeInterval: 60000,
    subreddit: 'pics'
  };

  clock: ClockSettings = {
    dateFormat: 'MMMM Mo, YYYY',
    timeFormat: 'HH:mm'
  };

  @Mutation
  saveSettings() {
    // tslint:disable-next-line:no-console
    console.log('Mutating settings state');
  }

  @Action
  save() {
    this.context.commit('saveSettings');
  }
}
