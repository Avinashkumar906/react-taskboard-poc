import Axios from 'axios';

const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 30000,
};

const token = localStorage.getItem('token');
const axios = Axios.create(axiosConfig);

if(token) {
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
}

// axios.interceptors.request

export default axios;