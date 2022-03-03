import {getAxiosInstance} from './axiosInstance';
import {API} from '../../constants';
export function UnauthApi(){
  const defaultHeaders = {
    'Content-Type':'application/json'
  };
  return {
    login: function(data){
      return getAxiosInstance({
        url: API.unauthUrls.login,
        method:'POST',
        headers: {...defaultHeaders},
        data
      })
    },
    forgotPassword: function(data){
      return getAxiosInstance({
        url: API.unauthUrls.forgotPassword,
        method:'POST',
        headers: {...defaultHeaders},
        data
      })
    }
  }
}
