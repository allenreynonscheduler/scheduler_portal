import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL_API,
  // You can add other default configurations here
  // headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
});

export default axiosInstance;