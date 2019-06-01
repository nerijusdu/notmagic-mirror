import Vue from 'vue';
import App from './App.vue';
import store from '@store';
import './util/registerComponents';

store.dispatch('init');

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  store
});
