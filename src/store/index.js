/* eslint no-param-reassign: ["error", { "props": false }] */
import Vuex from 'vuex';
import Vue from 'vue';

import Jugador from './modules/jugador';

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
    Jugador,
  }
});
