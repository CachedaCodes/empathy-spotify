import api from '@/api';

const state = {
  albums: []
};

const getters = {
  GET_ALBUMS: (state) => {
    return state.albums
  }
};

const mutations = {
  SET_ALBUMS: (state, albums) => {
    state.albums = albums;
  },
  CLEAR_ALBUMS: (state) => {
    state.albums = [];
  }
};

const actions = {
  SEARCH_ALBUMS: async ({ commit, dispatch }, query) => {
    try {
      const { data } = await api.spotify.search.search(query)
      if (!data) {
        commit('CLEAR_ALBUMS')
      } else {
        commit('SET_ALBUMS', data.albums.items);
      }
    } catch (err) {
      commit('CLEAR_ALBUMS')
      console.log(err.message);
    }
  }
};

const module = {
  state,
  getters,
  mutations,
  actions
};

export default module;

