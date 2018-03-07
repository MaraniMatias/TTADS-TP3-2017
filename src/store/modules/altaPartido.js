/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = `${Config.baseURL}/api`;

const state = {
  partido: {
    torneo: '',
    equipoA: { _id: '' },
    equipoB: { _id: '' },
    estado: 'Programado',
    estadio: '',
    categoria: '',
    arbitos: '',
    fechaInicio: new Date(),
    marcador: {
      golesEquipoA: 0,
      golesEquipoB: 0,
    },
  },
  loading: false,
  tipoEventos: []
};

const getters = {
  partido: state => state.partido,
  isLoading: state => state.loading,
  tipoEventos: state => state.tipoEventos,
};

const mutations = {
  set_tipo_eventos(state, tipoEventos) {
    const estado = state;
    estado.tipoEventos = tipoEventos;
  },
  set_partido(state, partido) {
    const estado = state;
    estado.partido = partido;
  },
  set_equipo(state, { set, equipo, cb }) {
    const { partido } = state;
    if (
      Object.hasOwnProperty.call(partido, set) &&
      partido.equipoA._id !== equipo._id && partido.equipoB._id !== equipo._id
    ) {
      partido[set] = equipo;
      cb(null);
    } else {
      cb(true);
    }
  },
  loading(state, loading) {
    const estado = state;
    estado.loading = !!loading;
  },
};

const actions = {
  // Admin
  postPartido({ commit, rootState }, entidad) {
    commit('loading', true);
    return axios
      .post(`${BaseURL}/partidos`, { partido: entidad }, {
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
  //  Cargar partido
  loadPartido({ commit }, { partidoId }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/partidos/${partidoId}`)
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
  loadTipoEvento({ commit }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/tipos-evento`)
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          commit('set_tipo_eventos', list);
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
