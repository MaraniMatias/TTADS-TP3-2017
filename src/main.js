// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Vue from 'vue';
import ons from 'onsenui';
import VueOnsen from 'vue-onsenui';
import VueRouter from 'vue-router';
import Morphling from 'morphling'; // Filtros, para fechas usa moment
// Theme color tabs y headbar
// import './assets/css/theme/onsen-css-components.css';

import store from './store/index';
import App from './App';

import Home from './components/homePage';
import Partido from './components/partidoPage';
import Equipo from './components/equipoPage';
import EquiposPage from './components/equiposPage';
import Jugador from './components/perfilJugadorPage';
import JugadoresPage from './components/jugadoresPage';

Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(VueOnsen);
Vue.use(Morphling);

const routes = [
  { path: '*', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/equipos', component: EquiposPage, name: 'equiposPage' },
  { path: '/jugadores', component: JugadoresPage, name: 'jugadoresPage' },
  // Usan parametros id para pedir la entidad
  {
    path: '/equipo/:id',
    component: Equipo,
    name: 'equipo',
    props: true
  },
  {
    path: '/jugador/:id',
    component: Jugador,
    name: 'jugador',
    props: true
  },
  { path: '/partido', component: Partido, name: 'partido' },
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
