import api from "@/api";

const state = {
  accessToken: ""
};

const getters = {
  GET_ACCESS_TOKEN: state => state.accessToken
};

const mutations = {
  SET_ACCESS_TOKEN: (state, token) => {
    state.accessToken = token;
  }
};

const actions = {
  SPOTIFY_LOGIN: () => {
    try {
      console.log(api)
      window.location.href = api.auth.spotifyLoginURL;
    } catch (err) {
      console.error(err.message);
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
