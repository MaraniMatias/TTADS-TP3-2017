/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = `${Config.baseURL}/api`;

const state = {
  listTorneos: [],
  filterTorneos: [],
  loading: false,
};

const getters = {
  filterTorneos: state => state.filterTorneos,
  isLoading: state => state.loading,
  listTorneos: state => state.listTorneos,
};

const mutations = {
  set_filter(state, { list } = { list: [] }) {
    const estado = state;
    estado.filterTorneos = list;
  },
  set_list(state, { list } = { list: [] }) {
    const estado = state;
    estado.listTorneos = list;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  }
};

const actions = {
  upDateFilter({ commit }, { list }) {
    commit('set_filter', { list });
  },
  cleanList({ commit }) {
    commit('clean_list');
  },
  //  Cargar partido
  loadTorneos({ commit }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/torneos`)
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          commit('set_list', { list });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        commit('loading', false);
      });
  },

  // Admin
  postTorneos({ commit, rootState }, entidad) {
    commit('loading', true);
    return axios
      .post(`${BaseURL}/torneos`, { torneo: entidad }, {
        headers: { Authorization: `Bearer ${rootState.token}` }
      })
      .then((resp) => {
        console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const object = _.get(resp, 'data.data', {}) || {};
        return message !== 'Success' ? object : {};
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
