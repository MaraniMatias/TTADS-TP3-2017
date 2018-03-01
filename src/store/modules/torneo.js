/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

const state = {
  listTorneos: [],
  loading: false,
};

const getters = {
  isLoading: state => state.loading,
  list: state => state.listTorneos,
};

const mutations = {
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
