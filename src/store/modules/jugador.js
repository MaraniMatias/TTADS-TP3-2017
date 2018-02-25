/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

const state = {
  loading: false,
  list: [],
  page: 0
};

const getters = {
  list: state => state.list,
  isLoading: state => state.loading,
  page: state => state.page
};

const mutations = {
  clean_list(state) {
    const estado = state;
    estado.list = [];
    estado.page = 0;
  },
  set_list_jugadores(state, listJugadores = [], page = 0) {
    const estado = state;
    estado.list = listJugadores;
    estado.page = page;
  },
  add_list_jugadores(state, listJugadores = []) {
    const estado = state;
    estado.list = estado.list.concat(listJugadores);
    estado.page += 1;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  }
};

const actions = {
  cleanList({ commit }) {
    commit('clean_list');
  },
  // query, String que reprecenta apellido o nombre
  loadingJugadores({ commit }, { query, page }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/jugadores`, {
        params: {
          jugador: query,
          skip: page * 10
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const jugadores = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list_jugadores', jugadores, page);
          } else {
            commit('add_list_jugadores', jugadores);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        commit('loading', false);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
