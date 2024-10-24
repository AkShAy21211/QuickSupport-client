import createAxiosInstance from "../axios";
import authEndpoints from "./endpoints";
const axios = createAxiosInstance();
axios.defaults.baseURL = "http://localhost:5000/api"

export const login = async (email) => {
  try {
    const response = await axios.post(authEndpoints.login, {
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};
