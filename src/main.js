import Vue from 'vue';
import axios from 'axios';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import User from '../Helper/User';
Vue.use(Vuetify);
Vue.use(VueRouter);
window.User = User;
window.axios = axios;
window.EventBus = new Vue();
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let jwtToken = `Bearer ${localStorage.getItem('token')}}`;
let csrf = document.querySelector('meta[name="csrf-token"]');
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common = {'Authorization': `bearer ${localStorage.getItem('token')}}`}
export default axios;

window.axios.defaults.baseURL = 'http://localhost:8000';
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App),
});
