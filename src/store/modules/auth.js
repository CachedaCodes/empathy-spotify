import api from '@/api';

const state = {
  accessToken: ''
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
  SPOTIFY_LOGIN: async () => {
    try {
      const { data } = await api.auth.getUserAuthURL();
      if (!data) {
      } else {
        window.location.href = "https://spotify-oauth-backend.herokuapp.com/login";
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

