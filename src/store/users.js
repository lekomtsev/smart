export default {
  state: {
    all: {},
  },
  actions: {
    getAll({ commit }) {
      commit('getAllRequest');

    },
  },
  mutations: {
    getAllRequest(state) {
      state.all = { loading: true };
    },
    getAllSuccess(state, users) {
      state.all = { items: users };
    },
    getAllFailure(state, error) {
      state.all = { error };
    },
  },
};
