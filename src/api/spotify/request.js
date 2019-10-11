import axios from "axios";

import store from "../../store";

const baseURL = "https://api.spotify.com/v1/";

const request = axios.create({
  baseURL
});

// Wait for the request to insert the headers so it can access the vuex store
request.interceptors.request.use(function(config) {
  config.headers.common["Content-Type"] = "application/json";

  if (store.getters["GET_ACCESS_TOKEN"]) {
    config.headers.common["Authorization"] = `Bearer ${
      store.getters["GET_ACCESS_TOKEN"]
    }`;
  }
  return config;
}, null);

// Handles the request response in case it errors and tries to refresh the auth token
request.interceptors.response.use(null, error => {
  const { status } = error.response;

  if (store.getters["GET_ACCESS_TOKEN"] && status === 401) {
    // TODO: Refresh Token
    store.dispatch("SPOTIFY_LOGIN");
  } else if (status === 404) {
    throw error.response;
  } else {
    throw error.response;
  }
});

export default request;
