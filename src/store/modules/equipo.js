/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

const state = {
  equipo: {},
  list: [],
  loading: false,
  page: 0,
};

const getters = {
  equipo: state => state.equipo,
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
  set_list(state, { list, page } = { list: [], page: 0 }) {
    const estado = state;
    estado.list = list;
    estado.page = page;
  },
  add_list(state, { list } = { list: [] }) {
    const estado = state;
    estado.list = estado.list.concat(list);
    estado.page += 1;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  },
  set_equipo(state, equipo) {
    const estado = state;
    estado.equipo = equipo;
  },
};

const actions = {
  cleanList({ commit }) {
    commit('clean_list');
  },
  // query, String que reprecenta apellido o nombre
  loadItemList({ commit }, { query, page }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/equipos`, {
        params: {
          nombre: query,
          skip: page * 10
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const jugadores = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', { list: jugadores, page });
          } else {
            commit('add_list', { list: jugadores });
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
  getEquipoByID({ commit }, id) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/equipos/${id}`)
      .then((resp) => {
        const message = _.get(resp, 'data.message', '') || '';
        const equipo = _.get(resp, 'data.data', {}) || {};
        if (message === 'Success') {
          commit('set_equipo', equipo);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        commit('loading', false);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
