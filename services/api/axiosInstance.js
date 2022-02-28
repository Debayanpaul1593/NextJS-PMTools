import axios from 'axios';
import {API} from '../../constants';

export const getAxiosInstance = info => {
  const {url, method, headers, data} = info ?? {};
  const axiosInstance = axios.create({
    baseURL: API.baseUrls[API.currentEnv],
    timeout: 2 * 60 * 1000,
    headers,
  });


  axiosInstance.interceptors.request.use(config => {
    console.log('>> outgoing request', config.url);
    return config;
  });


  axiosInstance.interceptors.response.use(response=> {
    if(response) return response?.data;
    else return new Error('Failed to return data');
  });

  return axiosInstance({url, method, headers, data});
}
