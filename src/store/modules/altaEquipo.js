/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = `${Config.baseURL}/api`;

const state = {
  equipo: {
    nombre: '',
    escudoURL: '',
    cuerpoTecnico: [],
    jugadores: []
  },
  loading: false,
};

const getters = {
  equipo: state => state.equipo,
  isLoading: state => state.loading,
};

const mutations = {
  set_jugadores(state, jugadores) {
    const estado = state;
    estado.equipo.jugadores = jugadores;
  },
  set_cuerpo_tecnico(state, cuerpoTecnico) {
    const estado = state;
    estado.equipo.cuerpoTecnico = cuerpoTecnico;
  },
  set_equipo(state, { nombre, escudoURL }) {
    const estado = state;
    estado.equipo.nombre = nombre;
    estado.equipo.escudoURL = escudoURL;
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  },
};

const actions = {
  // Admin
  postEquipo({ commit, rootState }, entidad) {
    commit('loading', true);
    return axios
      .post(`${BaseURL}/equipos`, { equipo: entidad }, {
        headers: { Authorization: `Bearer ${rootState.token}` }
      })
      .then((resp) => {
        // console.log(resp);
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
