import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    splitter: {
      namespaced: true,
      state: {
        open: false,
      },
      actions,
      getters,
      mutations
    },
  },
});