// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import ons from 'onsenui';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import Morphling from 'morphling'; // Filtros, para fechas usa moment

import store from './store';
import App from './App';

import Home from './components/homePage';
import Equipo from './components/equipoPage';
import ListEquipoPage from './components/listEquipoPage';
import Jugador from './components/jugadorPage';
import Partido from './components/partidoPage';

import Dialogs from './components/dialogs';

Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(VueOnsen);
Vue.use(Morphling);

const routes = [
  { path: '*', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/equipos', component: ListEquipoPage, name: 'listEquipoPage' },
  // Usan parametros id para pedir la entidad
  { path: '/equipo', component: Equipo, name: 'equipo' },
  { path: '/jugador', component: Jugador, name: 'jugador' },
  { path: '/partido', component: Partido, name: 'partido' },

  { path: '/dialogs', component: Dialogs, name: 'dialogs' },
];

const router = new VueRouter({
  // mode: 'history', //navega sin recargar pag y sin #, requiere config. el backend
  linkActiveClass: 'active',
  routes,
});

ons.ready(() => {
  console.log("Ready");
  if (window.StatusBar) {
    StatusBar.styleLightContent();
    StatusBar.styleBlackOpaque();
  }
  document.addEventListener('backbutton', () => {
    const routeName = router.currentRoute.nmae;
    if (routeName === 'home') {
      navigator.app.exit();
    } else {
      navigator.app.backHistory();
    }
  }, false);
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
