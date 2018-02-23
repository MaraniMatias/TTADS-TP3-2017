import axios from 'axios';

const baseURL = "https://api.themoviedb.org/3";

export default {
  authenticationGuest({ commit }) {
    return axios.get(`${baseURL}/authentication/guest_session/new`)
      .then((response) => {
        commit('set_guest_session', response.data);
      }, (err) => {
        console.error(err);
      });
  }
};
