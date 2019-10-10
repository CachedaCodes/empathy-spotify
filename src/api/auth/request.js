import axios from 'axios'

const CorsProxy = "https://cors-anywhere.herokuapp.com/"
const baseURL = `${CorsProxy}https://spotify-oauth-backend.herokuapp.com/`;

const request = axios.create({ 
    baseURL
});

export default request;