import store from '@store';
import Vue from 'vue';
import App from './App.vue';
import './util/registerComponents';

store.dispatch('init');

const app = new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App />'
});
