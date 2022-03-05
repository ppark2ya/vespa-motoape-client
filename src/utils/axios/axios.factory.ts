import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import { API_URL } from '@constants/environments';
import qs from 'qs';

/**
 * @see https://github.com/axios/axios
 */
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json; charset=utf-8',
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

/**
 * @see https://javascript.plainenglish.io/configuring-a-camelcase-to-snake-case-parser-with-axios-9fa34fd3b16f
 */
function axiosRequestInterceptor(config: AxiosRequestConfig) {
  return config;
}

function axiosResponseInterceptor(response: AxiosResponse) {
  return response;
}

function axiosErrorInterceptor(error: AxiosError) {
  return Promise.reject(error);
}

axiosInstance.interceptors.request.use(
  axiosRequestInterceptor,
  axiosErrorInterceptor,
);
axiosInstance.interceptors.response.use(
  axiosResponseInterceptor,
  axiosErrorInterceptor,
);

export default axiosInstance;
