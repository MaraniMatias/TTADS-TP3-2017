/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';
import _ from 'lodash';
import Config from '../../config';

const BaseURL = Config.baseURL;

function orderTorneos(list) {
  const listKey = {};

  list.forEach((elem) => {
    const dateTime = new Date(elem.fechaInicio);
    // Obtener la fecha segun el timezone y crear una key
    const date = `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDate()}`;

    if (Object.prototype.hasOwnProperty.call(listKey, date)) {
      listKey[date].push(elem);
    } else {
      listKey[date] = [elem];
    }
  });

  Object.keys(listKey).forEach((key) => {
    const orderByFecha = _.orderBy(listKey[key], 'fechaInicio');
    listKey[key] = orderByFecha;
  });

  return listKey;
}

function groupByTorneo(list) {
  const fixtureByTorneo = {};

  list.forEach((elem) => {
    const key = elem.torneo._id;
    const torneo = {
      _id: key,
      nombre: elem.torneo.nombre,
      partidos: [elem]
    };
    if (Object.prototype.hasOwnProperty.call(fixtureByTorneo, key)) {
      fixtureByTorneo[key].partidos.push(elem);
    } else {
      fixtureByTorneo[key] = torneo;
    }
  });

  return fixtureByTorneo;
}

const state = {
  fixturePorEquipo: [],
  listActivos: [],
  listPasados: [],
  loading: false,
  page: 0,
  tab: 'activos',
};

const getters = {
  fixturePorEquipo: state => state.fixturePorEquipo,
  isLoading: state => state.loading,
  listActivos: state => state.listActivos,
  listPasados: state => state.listPasados,
  page: state => state.page,
  tab: state => state.tab,
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
  },
  set_fixture_por_equipo(state, { list }) {
    const estado = state;
    estado.fixturePorEquipo = list;
  }
};

const actions = {
  cleanList({ commit }) {
    commit('clean_list');
  },
  //  Cargar partido
  loadListPartidosActivos({ commit }, { page = 0, filter = [] }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/fixture-activos`, {
        params: {
          skip: page * 10,
          torneos: filter || []
        }
      })
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        const setList = 'listActivos';
        if (message === 'Success') {
          if (page === 0) {
            commit('set_list', { setList, list: orderTorneos(list), page });
          } else {
            commit('add_list', { setList, list: orderTorneos(list) });
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
            commit('set_list', { setList, list: orderTorneos(list), page });
          } else {
            commit('add_list', { setList, list: orderTorneos(list) });
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
  loadFixturePorEquipo({ commit }, { equipoId }) {
    commit('loading', true);
    return axios
      .get(`${BaseURL}/torneos-por-equipo/${equipoId}`)
      .then((resp) => {
        // console.log(resp);
        const message = _.get(resp, 'data.message', '') || '';
        const list = _.get(resp, 'data.data', []) || [];
        if (message === 'Success') {
          const fixture = groupByTorneo(list);
          commit('set_fixture_por_equipo', { list: fixture });
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
