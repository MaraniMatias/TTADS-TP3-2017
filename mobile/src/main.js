// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import store from './store';
import App from './App';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueOnsen);

const routes = [
  { path: '*', redirect: '/' },
  { path: '/foo', component: null, name: "" },
  { path: '/bar', component: null, name: "" }
];

const router = new VueRouter({
  //mode: 'history', //navega sin recargar pag y sin #, requiere config. el backend
  linkActiveClass: 'active',
  routes // short for `routes: routes`
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  strict: true, // In strict mode any mutations to Vuex state outside of mutation handlers will throw an Error.
  template: '<App/>',
  components: { App },
});
