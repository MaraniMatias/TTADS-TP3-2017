/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = `${Config.baseURL}/auth`;

const state = {
  loading: false,
  user: {},
  token: ''
};

const getters = {
  user: state => state.user,
  isLogin: state => typeof state.user.username !== 'undefined' && state.user.username,
  isLoading: state => state.loading
};

const mutations = {
  clean_user(state) {
    const estado = state;
    estado.user = {};
    estado.token = "";
  },
  set_user(state, { user, token }) {
    const estado = state;
    estado.user = user;
    estado.token = token;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  },
};

const actions = {
  logOut({ commit }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/logout`, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      })
      .then((resp) => {
        const message = _.get(resp, 'data.message', '') || '';
        if (message === 'Success') {
          commit('clean_user');
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        commit('loading', false);
      });
  },
  logIn({ commit }, { username, password }) {
    commit('loading', true);
    console.log(username, password);
    return axios
      .post(`${BaseURL}/login`, {
        username,
        password
      })
      .then((resp) => {
        console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const user = _.get(resp, 'data.data.user', {}) || {};
        const token = _.get(resp, 'data.data.token', '') || '';
        if (message === 'Success') {
          commit('set_user', { user, token });
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        commit('loading', false);
      });
  },
  getUserInfo({ commit, state }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/me`, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      })
      .then((resp) => {
        _.get(resp, 'data.data', null);
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
