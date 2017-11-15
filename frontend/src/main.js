import Vue from 'vue';

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl'

import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  }
});

Vue.config.productionTip = process.env.NODE_ENV !== 'production';

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  strict: true,
  store,
  template: '<App/>',
  components: { App },
});
export default vm;
