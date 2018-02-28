/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

const state = {
  listActivos: [],
  listPacidos: [],
  loading: false,
  tab: 'activos',
  page: 0
};

const getters = {
  isLoading: state => state.loading,
  listActivos: state => state.listActivos,
  listPacidos: state => state.listPacidos,
  tab: state => state.tab,
  page: state => state.page
};

const mutations = {
  set_list(state, listOld = 'listActivos', listNew = [], page = 0) {
    const estado = state;
    estado[listOld] = listNew;
    estado.page = page;
  },
  add_list(state, listOld = 'listActivos', listNew = []) {
    const estado = state;
    estado[listOld] = estado.listOld.concat(listNew);
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
  loadListPartidosActivos({ commit }, { page = 0 }) {
    console.log('-> ', page);
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
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', 'listActivos', list);
          } else {
            commit('add_list', 'listActivos', list);
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
  loadListPartidosPasados({ commit }, { page = 0 }) {
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
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', 'listPacidos', list);
          } else {
            commit('add_list', 'listPacidos', list);
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
