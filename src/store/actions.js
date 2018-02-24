import axios from 'axios';
import config from '../config';

const BaseURL = config.baseURL;

export default {
  // query, apellido o nombre
  getJugadores({ query, page }) {
    return axios.get(`${BaseURL}/jugadores`, {
      params: {
        jugador: query,
        skip: page * 10
      }
    });
  },
  /*
  authenticationGuest({ commit }) {
    return axios.get(`${BaseURL}/jugadores`)
      .then((response) => {
        commit('set_guest_session', response.data);
      }, (err) => {
        console.error(err);
      });
  }
  */
};
