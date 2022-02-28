import {getAxiosInstance} from './axiosInstance';
import {API} from '../../constants';
export function AuthApi(AuthHeader){
  const defaultHeaders = {
    'Content-Type':'application/json'
  };
  return {
    getAllTasks: function(){
      return getAxiosInstance({
        url: API.authUrls.tasks,
        method:'GET',
        headers: {...defaultHeaders}
      })
    }
  }
}
