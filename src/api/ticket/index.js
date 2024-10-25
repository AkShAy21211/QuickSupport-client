import { toast } from "sonner";
import createAxiosInstance from "../axios";
import ticketEndPoints from "./endpoints";
const axios = createAxiosInstance();

export const createTicket = async (description, category) => {
  try {
    const response = await axios.post(ticketEndPoints.create, {
      description,
      category,
    });
    toast.success(response.data.message, {
      position: "top-right",
      cancel: {
        label: "Close",
      },
      actionButton: "bg-zinc-400",
      duration: 5000,
    });
    return response.data;
  } catch (error) {
     toast.error(error.response.data.message, {
      position: "top-right",
      cancel: {
        label: "Close",
      },
      actionButton: "bg-zinc-400",
      duration: 5000,
    });
    console.error("Error during login:", error);
  }
};

export const getAllIssueCategory = async () => {
  try {
    const response = await axios.get(ticketEndPoints.getIssues);
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};
