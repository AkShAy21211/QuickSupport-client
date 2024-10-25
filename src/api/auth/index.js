import createAxiosInstance from "../axios";
import authEndpoints from "./endpoints";
import { toast } from "sonner";
const axios = createAxiosInstance();

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
