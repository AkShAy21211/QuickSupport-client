import axios from "axios";

// Function to generate an Axios instance with custom configuration
const createAxiosInstance = () => {
  const token = localStorage.getItem("token");
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
  axiosInstance.defaults.baseURL = "http://localhost:5000/api";

  return axiosInstance;
};

export default createAxiosInstance;
