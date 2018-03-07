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
import './assets/css/theme/onsen-css-components.css';
import './assets/css/theme/theme.css';

import store from './store/index';
import App from './App';

import Home from './components/homePage';
import Partido from './components/partidoPage';
import Equipo from './components/equipoPage';
import EquiposPage from './components/equiposPage';
import Jugador from './components/perfilJugadorPage';
import JugadoresPage from './components/jugadoresPage';
import LoginPage from './components/loginPage';

// Admin page
import EdicionPartido from './components/editarPartido';
import AltaTipoEvento from './components/altaTipoEvento';
import AltaJugador from './components/altaJugador';
import AltaCuerpoTecnico from './components/altaCuerpoTecnico';
import AltaPartido from './components/altaPartido';
import AltaTorneo from './components/altaTorneo';
import AltaEquipo from './components/altaEquipo';
import AltaEquipoJugadores from './components/altaEquipoJugadores';
import AltaEquipoCurpoTecnico from './components/AltaEquipoCurpoTecnico';

Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(VueOnsen);
Vue.use(Morphling);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home'
  },
  {
    path: '/jugadores',
    component: JugadoresPage,
    name: 'jugadoresPage'
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'loginPage'
  },
  {
    path: '/equipos/:setEquipo',
    component: EquiposPage,
    name: 'equiposPage',
    props: true
  },
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
  {
    path: '/partido/:partidoId',
    component: Partido,
    name: 'partido',
    props: true
  },
  // Admin
  {
    path: '/altaJugador',
    component: AltaJugador,
    name: 'altaJugador'
  },
  {
    path: '/altaJugador',
    component: AltaCuerpoTecnico,
    name: 'altaCuerpoTecnico'
  },
  {
    path: '/altaTipoEvento',
    component: AltaTipoEvento,
    name: 'altaTipoEvento'
  },
  {
    path: '/altaPartido',
    component: AltaPartido,
    name: 'altaPartido'
  },
  {
    path: '/altaTorneo',
    component: AltaTorneo,
    name: 'altaTorneo'
  },
  {
    path: '/altaEquipo',
    component: AltaEquipo,
    name: 'altaEquipo'
  },
  {
    path: '/altaEquipoJugadores',
    component: AltaEquipoJugadores,
    name: 'altaEquipoJugadores'
  },
  {
    path: '/altaEquipoCurpoTecnico',
    component: AltaEquipoCurpoTecnico,
    name: 'altaEquipoCurpoTecnico'
  },
  {
    path: '/edicionPartido',
    component: EdicionPartido,
    name: 'edicionPartido'
  }
];

const router = new VueRouter({
  mode: 'history', // navega sin recargar pag y sin #, requiere config. el backend
  linkActiveClass: 'active',
  routes,
});

ons.ready(() => {
  console.log("Ready");

  if (window.StatusBar) {
    StatusBar.styleLightContent();
    StatusBar.styleBlackOpaque();
  }

  ons.setDefaultDeviceBackButtonListener(() => {
    const routeName = router.currentRoute.nmae;
    console.log("Button Back", routeName);
    if (window.cordova) {
      if (routeName === 'home') {
        navigator.app.exit();
      } else {
        navigator.app.backHistory();
      }
    }
  });
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  strict: true,
  template: '<App/>',
  components: {
    App
  },
  beforeCreate() {
    // Shortcut for Material Design
    Vue.prototype.md = this.$ons.platform.isAndroid();
  }
});
