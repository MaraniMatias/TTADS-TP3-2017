/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

const state = {
  listActivos: [],
  listPasados: [],
  loading: false,
  tab: 'activos',
  page: 0
};

const getters = {
  isLoading: state => state.loading,
  listActivos: state => state.listActivos,
  listPasados: state => state.listPasados,
  tab: state => state.tab,
  page: state => state.page
};

const mutations = {
  set_list(state, { setList, list, page }) {
    const estado = state;
    estado[setList] = list;
    estado.page = page;
  },
  add_list(state, { setList, list }) {
    const estado = state;
    estado[setList] = estado[setList].concat(list);
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
  //  Cargar partido
  loadListPartidosActivos({ commit }, { page } = { page: 0 }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/fixture-activos`, {
        params: {
          skip: page * 10
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        const setList = 'listActivos';
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', { setList, list, page });
          } else {
            commit('add_list', { setList, list });
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
  loadListPartidosPasados({ commit }, { page } = { page: 0 }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/fixture-pasados`, {
        params: {
          skip: page * 10
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        const setList = 'listPasados';
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', { setList, list, page });
          } else {
            commit('add_list', { setList, list });
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
