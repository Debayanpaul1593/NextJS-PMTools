export const API = {
  currentEnv: "dev",
  baseUrls: {
    dev: "http://localhost:5000/api",
    qa: "",
    uat: "",
  },
  authUrls: {
    dashboard: "/dashboard",
    tasks:'/tasks',
    bugs:'/bugs'
  },
  unauthUrls: {
    login: "/login",
  },
};
