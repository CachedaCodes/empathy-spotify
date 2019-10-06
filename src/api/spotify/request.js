import axios from 'axios';
import authToken from '../auth'

const baseURL = 'https://api.spotify.com/v1/';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authToken}`
}

const request = axios.create({
  baseURL,
  headers
});

export default request;