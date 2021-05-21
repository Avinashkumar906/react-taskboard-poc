import Axios from 'axios';

const axiosConfig = {
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 30000,
};

// const token = localStorage.getItem('token');
const axios = Axios.create(axiosConfig);


axios.interceptors.request.use(req => {
  console.log('Request intercepting for bearer!')
  const accessToken = localStorage.getItem('token');
  req.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  return req;
})

axios.interceptors.response.use(res => {
  console.log('Response intercepting!')
  return res;
})

export default axios;