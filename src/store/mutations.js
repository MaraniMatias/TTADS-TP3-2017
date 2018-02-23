/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  toggle(state, shouldOpen) {
    if (typeof shouldOpen === 'boolean') {
      state.open = shouldOpen;
    } else {
      state.open = !state.open;
    }
  },
};
