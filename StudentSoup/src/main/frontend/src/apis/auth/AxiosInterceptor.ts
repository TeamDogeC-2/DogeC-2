import axios from 'axios';
import { authRefreshToken } from './AuthAPI';

const instance = axios.create();

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refresh-token');

    if (error.response.status === 401 && !originalRequest._retry) {
      if (refreshToken) {
        originalRequest._retry = true;

        try {
          const response = await authRefreshToken(refreshToken);
          const newAccessToken = response.data.accessToken;
          localStorage.setItem('access-token', newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return await instance(originalRequest);
        } catch (err) {
          console.error('Unable to refresh token');
        }
      }
    }

    return await Promise.reject(error);
  },
);

export default instance;
