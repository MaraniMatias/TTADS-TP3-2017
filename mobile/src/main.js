// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import ons from 'onsenui';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import store from './store';
import App from './App';

import Home from './components/homePage';
import Dialogs from './components/dialogs';
import PullHook from './components/pullHook';
import Form from './components/form';

Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(VueOnsen);

const routes = [
  { path: '*', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/dialogs', component: Dialogs, name: 'dialogs' },
  { path: '/pullhook', component: PullHook, name: 'pullhook' },
  { path: '/form', component: Form, name: 'form' }
];

const router = new VueRouter({
  // mode: 'history', //navega sin recargar pag y sin #, requiere config. el backend
  linkActiveClass: 'active',
  routes,
});

ons.ready(() => {
  console.log("Ready");
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  strict: true,
  template: '<App/>',
  components: { App }
});
