import axios from 'axios';
import { authRefreshToken } from './AuthAPI';

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken: string | null = JSON.parse(localStorage.getItem('access-token') ?? 'null');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
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
    const refreshToken: string | null = JSON.parse(localStorage.getItem('refresh-token') ?? 'null');

    if (error.response.status === 401 && !originalRequest._retry) {
      if (refreshToken) {
        originalRequest._retry = true;

        try {
          const response = await authRefreshToken(refreshToken);
          const newAccessToken = JSON.stringify(response.data.accessToken);
          localStorage.setItem('access-token', newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return await axiosInstance(originalRequest);
        } catch (err) {
          console.error('Unable to refresh token');
        }
      }
    }

    return await Promise.reject(error);
  },
);

export default axiosInstance;
