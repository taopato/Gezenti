import axios from 'axios';
import { API_BASE_URL } from '../config/env';
import { getToken } from '../auth/tokenStorage';

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
httpClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // CORS veya network hatalarını daha iyi handle et
    if (!error.response) {
      // Network hatası (CORS, timeout, vb.)
      error.message = error.message || 'Sunucuya bağlanılamıyor';
    }
    return Promise.reject(error);
  }
);

export default httpClient;

