import Axios from 'axios';

const axiosConfig = {
  baseURL: 'http://localhost:8080/',
  timeout: 30000,
};

const token = localStorage.getItem('token');
const axios = Axios.create(axiosConfig);

if(token) {
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
}

// axios.interceptors.request

export default axios;