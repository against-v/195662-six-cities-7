import axios from 'axios';
import {HttpStatus} from '../const';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (onUnauthorized, onServerError) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpStatus.UNAUTHORIZED) {
      onUnauthorized();
    }

    if (response.status === HttpStatus.SERVER_ERROR) {
      onServerError();
    }

    throw err;
  };

  api.interceptors.request.use((config) => {
    config.headers['x-token'] = localStorage.getItem('token') ?? '';
    return config;
  });

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
