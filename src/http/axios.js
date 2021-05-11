import Axios from 'axios';

const axiosConfig = {
  baseURL: 'https://api4asquare.herokuapp.com/',
  timeout: 30000,
};

const axios = Axios.create(axiosConfig);

export default axios;