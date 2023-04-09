import axios from 'axios';
import { authRefreshToken } from './AuthAPI';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  config => {
    if (localStorage.getItem('access-token') !== null) {
      const accessToken = JSON.parse(localStorage.getItem('access-token') ?? '{}');
      const refreshToken = localStorage.getItem('refresh-token');

      if (Date.now() > accessToken.expire && refreshToken) {
        authRefreshToken(refreshToken).then(response => {
          const newAccessToken = JSON.parse(localStorage.getItem('access-token') ?? '{}');

          config.headers.Authorization = `Bearer ${newAccessToken.value}`;
        });
      } else {
        config.headers.Authorization = `Bearer ${accessToken.value}`;
      }
    }

    return config;
  },
  async error => {
    return await Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem('refresh-token');

    if (error.response.status === 403) {
      if (refreshToken) {
        originalRequest._retry = true;

        await authRefreshToken(refreshToken).then(res => {
          const newAccessToken = JSON.parse(localStorage.getItem('access-token') ?? '{}');

          originalRequest.headers.Authorization = `Bearer ${newAccessToken.value}`;
        });

        return await axiosInstance(originalRequest);
      }
    }

    return await Promise.reject(error);
  },
);

export default axiosInstance;
