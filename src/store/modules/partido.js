/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

const state = {
  listEventos: [],
  loading: false,
  page: 0,
  partido: {},
};

const getters = {
  isLoading: state => state.loading,
  listEventos: state => state.listEventos,
  page: state => state.page,
  partido: state => state.partido,
};

const mutations = {
  set_list(state, list = [], page = 0) {
    const estado = state;
    estado.listEventos = list;
    estado.page = page;
  },
  add_list(state, list = []) {
    const estado = state;
    estado.listEventos = estado.listEventos.concat(list);
    estado.page += 1;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  },
  set_partido(state, partido) {
    const estado = state;
    estado.partido = partido;
  }
};

const actions = {
  cleanList({ commit }) {
    commit('clean_list');
  },
  //  Cargar partido
  loadPartido({ commit }, { partidoId }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/partidos`, {
        params: {
          id: partidoId
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const partido = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          commit('set_partido', partido);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        commit('loading', false);
      });
  },
  // query, String que reprecenta apellido o nombre
  loadItemList({ commit }, { partidoId, page }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/eventos-por-partido`, {
        params: {
          id: partidoId
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', list, page);
          } else {
            commit('add_list', list);
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
