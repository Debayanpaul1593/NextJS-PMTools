import { getAxiosInstance } from "./axiosInstance";
import { API } from "../../constants";
export function AuthApi(AuthHeader) {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  return {
    getAllTasks: function () {
      return getAxiosInstance({
        url: API.authUrls.tasks,
        method: "GET",
        headers: { ...defaultHeaders },
      });
    },
    saveTask: function (data) {
      return getAxiosInstance({
        url: API.authUrls.tasks,
        method: "POST",
        headers: { ...defaultHeaders },
        data
      });
    },
    getUsers: function () {
      return getAxiosInstance({
        url: API.authUrls.users,
        method: "GET",
        headers: { ...defaultHeaders },
      });
    },
    getAllBugs: function () {
      return getAxiosInstance({
        url: API.authUrls.bugs,
        method: "GET",
        headers: { ...defaultHeaders },
      });
    },
  };
}
