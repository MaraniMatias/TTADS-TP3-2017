/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import _ from 'lodash';

import auth from './modules/auth';

import altaEquipo from './modules/altaEquipo';
import equipo from './modules/equipo';
import fixture from './modules/fixture';
import jugador from './modules/jugador';
import partido from './modules/partido';
import torneo from './modules/torneo';
import cuerpoTecnico from './modules/cuerpoTecnico';

import Config from '../config';

const BaseURL = Config.baseURL;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: 'No Token'
  },
  getters: {
    token: state => state.token,
  },
  mutations: {
    set_token(state, { token }) {
      const estado = state;
      estado.token = token;
    },
  },
  modules: {
    splitter: {
      namespaced: true,
      state: {
        open: false,
        app: {
          server: '',
          version: ''
        }
      },
      getters: {
        serverStatus: state => state.app
      },
      mutations: {
        app_status(state, serverStatus) {
          state.app = serverStatus;
        },
        toggle(state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen;
          } else {
            state.open = !state.open;
          }
        }
      },
      actions: {
        getServerStatus({ commit }) {
          return axios
            .get('/status', {
              baseURL: BaseURL
            })
            .then((resp) => {
              // console.log(resp);
              const serverStatus = _.get(resp, 'data', {}) || {};
              commit('app_status', {
                server: serverStatus.server || '',
                version: serverStatus.version || ''
              });
            })
            .catch((error) => {
              console.error(error);
            });
        },
      }
    },
    altaEquipo,
    auth,
    cuerpoTecnico,
    equipo,
    fixture,
    jugador,
    partido,
    torneo,
  }
});
