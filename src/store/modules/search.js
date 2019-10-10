import api from '@/api';

const state = {
  albums: [],
  searching: false
};

const getters = {
  GET_ALBUMS: (state) => {
    return state.albums
  },
  IS_SEARCHING: (state) => {
    return state.searching
  }
};

const mutations = {
  SET_ALBUMS: (state, albums) => {
    state.albums = albums;
  },
  CLEAR_ALBUMS: (state) => {
    state.albums = [];
  },
  TRIGGER_SEARCHING: (state) => {
    state.searching = !state.searching
  }
};

const actions = {
  SEARCH_ALBUMS: async ({ commit, dispatch }, query) => {
    try {
      commit('TRIGGER_SEARCHING');
      const { data } = await api.spotify.search.search(query);
      if (!data) {
        commit('CLEAR_ALBUMS');
      } else {
        commit('SET_ALBUMS', data.albums.items);
      }

      commit('TRIGGER_SEARCHING')
    } catch (err) {
      commit('CLEAR_ALBUMS');
      commit('TRIGGER_SEARCHING');
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

