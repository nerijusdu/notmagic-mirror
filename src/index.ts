import Vue from 'vue';
import App from './App.vue';
import store from '@store';
import './util/registerComponents';

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  store
});
