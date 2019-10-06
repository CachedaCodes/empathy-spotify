import api from '@/api';

const state = {
};

const getters = {
  };

const mutations = {
  };

const actions = {
    SEARCH_ALBUMS: async ({ commit, dispatch }, query) => {
      try {
        const { data } = await api.spotify.search.search(query)
        if (!data) {
          console.log("No data");
        } else {
          console.log(data)
        }
      } catch (err) {
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

