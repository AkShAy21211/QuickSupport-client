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

  return axiosInstance;
};

export default createAxiosInstance;
