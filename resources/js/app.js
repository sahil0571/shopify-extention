
// require('./bootstrap');

import router from './routes.js';
import App from './components/layouts/index.vue';
import Vue from 'vue';
import PolarisVue from '@hulkapps/polaris-vue';
import '@hulkapps/polaris-vue/dist/polaris-vue.css';

Vue.use(PolarisVue);

// window.Vue = require('vue').default;

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});