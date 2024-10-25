import axios from "axios";

// Function to generate an Axios instance with custom configuration
const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },

  });
  axiosInstance.defaults.baseURL = process.env.REACT_APP_BACKEND_URL
  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
      
          const token = localStorage.getItem("token");
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error("Refresh token failed", refreshError);
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default createAxiosInstance;
