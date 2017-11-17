"use strict";
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';

import Equipo from '@/components/Equipo';
import EquipoList from '@/components/EquipoList';
import Partido from '@/components/Partido';
import PartidoList from '@/components/PartidoList';
import Jugador from '@/components/Jugador';
import JugadorList from '@/components/JugadorList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      name: "login",
      path: '/login',
      component: Login
    }, {
      name: "equipo.list",
      path: '/equipo',
      component: EquipoList
    }, {
      //Con admin editar, más de dos resultado a listado
      name: "equipo",
      path: '/equipo/:name',
      //Con admin y parametro NULL alta
      props: (route) => ({ name: String(route.params.name), props: true, default: null }),
      component: Equipo
    }, {
      name: "jugador.list",
      path: '/jugador',
      component: JugadorList
    }, {
      //Con admin editar, más de dos resultado a listado
      name: "jugador",
      path: '/jugador/:name',
      //Con admin y parametro NULL alta
      props: (route) => ({ name: String(route.params.name), props: true, default: null }),
      component: Jugador
    }, {
      name: "partido.list",
      path: '/partido',
      component: PartidoList
    }, {
      //Con admin editar, más de dos resultado a listado
      name: "partido",
      path: '/partido/:name',
      //Con admin y parametro NULL alta
      props: (route) => ({ name: String(route.params.name), props: true, default: null }),
      component: Partido
    }
  ]
});
