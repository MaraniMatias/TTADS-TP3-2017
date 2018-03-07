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
  },
  loading: false,
};

const getters = {
  partido: state => state.partido,
  isLoading: state => state.loading,
};

const mutations = {
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
