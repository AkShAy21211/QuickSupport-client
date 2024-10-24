import createAxiosInstance from "../axios";
import authEndpoints from "./endpoints";
import { toast } from "sonner";
const axios = createAxiosInstance();

export const login = async (email) => {
  try {
    const response = await axios.post(authEndpoints.login, {
      email,
    });
    toast(response.message, {
      className: "my-classname",
      description: "My description",
      duration: 5000,
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};
