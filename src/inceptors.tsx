import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token");
API.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `token ${token}`;
    console.log("request send to ", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("The Token WAs Expaierd");
    }
    return Promise.reject(error);
  },
);
export default API;
