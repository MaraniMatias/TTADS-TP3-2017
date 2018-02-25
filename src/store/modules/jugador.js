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
  getJugadores: state => state.list,
  isLoading: state => state.loading,
  getPage: state => state.page
};

const mutations = {
  set_list_jugadores(state, listJugadores, page) {
    const estado = state;
    estado.item = listJugadores;
    estado.page = page;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  }
};

const actions = {
  // query, String que reprecenta apellido o nombre
  getJugadores({ commit }, query, page) {
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
          commit('set_list_jugadores', jugadores, page);
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
  state,
  getters,
  actions,
  mutations
};
