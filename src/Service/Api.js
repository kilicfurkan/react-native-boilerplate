import axios from 'axios';
import {API_URL, API_KEY} from '@env';
import * as Routes from './ApiRouter';

export let axiosInstance = (versionNumber = 'v1') => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line prettier/prettier
      'Authorization': `Bearer ${API_KEY}`,
    },
    timeout: 30000,
  });
};

let backEndServices = axiosInstance();

export const register = (body) => {
  return backEndServices.post(Routes.registerPath, body);
};

export const login = (params) => {
  return backEndServices.get(Routes.loginPath, {params});
};
