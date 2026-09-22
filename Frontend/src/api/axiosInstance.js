// import axios from "axios";

// let api = axios.create({
//  baseURL: "http://127.0.0.1:8000",
// });

// // Request interceptor
// api.interceptors.request.use(
//  (config) => {
//   let token = localStorage.getItem("token");

//   if (token) {
//    config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
//  },
//  (error) => {
//   return Promise.reject(error);
//  },
// );

// // Response interceptor
// api.interceptors.response.use(
//  (response) => {
//   return response;
//  },
//  (error) => {
//   if (error.response?.status === 401) {
//    localStorage.removeItem("token");
//    window.location.href = "/login";
//   }

//   return Promise.reject(error);
//  },
// );

// export default api;

import axios from "axios";

let api = axios.create({
 baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use(
 (config) => {
  let token = localStorage.getItem("token");

  if (token) {
   config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
 },
 (error) => {
  return Promise.reject(error);
 },
);

api.interceptors.response.use(
 (response) => {
  return response;
 },
 (error) => {
  return Promise.reject(error);
 },
);

export default api;
