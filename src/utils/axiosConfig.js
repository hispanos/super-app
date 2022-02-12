import * as axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_URL_API

axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }

    return config;
  },
  error => Promise.reject(error)
);