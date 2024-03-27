// First we need to import axios.js
import axios, { HeadersDefaults } from 'axios';
// import { URL } from "config/url.config";
// import { setupCache } from "axios-cache-adapter";

// const cache = setupCache({
//   maxAge: 2592000,
// });
// Next we make an 'instance' of it
// https://be.lazisnutrenggalek.org

const api = axios.create({
  // .. where we make our configurations
  // baseURL: 'http://103.65.236.88:3006/api',
  // baseURL: 'https://bita-api.weiots.io/',
  baseURL: 'https://water-api.weiots.io/',
  // adapter: cache.adapter,

  // baseURL: LOCAL_URL
});

const urlData = window.location.pathname;

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}
// console.log(window.location.pathname)
// Where you would set stuff like your 'Authorization' header, etc ...
if (localStorage.getItem('token')) {
  api.defaults.headers = {
    Authorization: localStorage.getItem('token'),
  } as CommonHeaderProperties;
} else {
  if (!['/user/login', '/user/forgot-password', '/', '/login', '/user'].includes(urlData)) {
    window.location.replace('/user/login');
  }
}

// console.log(localStorage.getItem("token"), "TOKEN");
// // Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...

export default api;
