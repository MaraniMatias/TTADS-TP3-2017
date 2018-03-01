/* eslint no-param-reassign: ["error", { "props": false }] */
import Vuex from 'vuex';
import Vue from 'vue';

import jugador from './modules/jugador';
import equipo from './modules/equipo';
import partido from './modules/partido';
import fixture from './modules/fixture';
import torneo from './modules/torneo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    splitter: {
      namespaced: true,
      state: {
        open: false,
      },
      mutations: {
        toggle(state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen;
          } else {
            state.open = !state.open;
          }
        }
      }
    },
    jugador,
    equipo,
    partido,
    fixture,
    torneo
  }
});
