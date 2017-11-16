"use strict";
import axios from 'axios';
const baseURL = "https://api.themoviedb.org/3";
const apiKey = "66ae687f31e3066ab23a1b7128278d17";

export default {
  createSessionWithLogin: function ({ commit }, { userName, userPass, requestToken }) {
    return axios.get(baseURL + "//authentication/token/validate_with_login", {
        params: {
          api_key: apiKey,
          username: userName,
          password: userPass,
          request_token: requestToken
        }
      })
      .then((response) => {
        return response.data.request_token;
      }, () => {
        throw "Usuario o contraseña incorrectos. Vuelva a intentar.";
      });
  }
};
