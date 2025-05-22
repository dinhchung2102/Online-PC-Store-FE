import axios from "axios";
import { apiUrl } from "./utils"

export const getAllFilter = async () => {
  try {
    const response = await axios.get(apiUrl + `/search/filter/get-all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all filters:", error);
    throw error;
  }
}

export const getFilterByKey = async (key) => {

  try {
    console.log("key", key);
    const response = await axios.get(`${apiUrl}${key}`);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all filters:", error);
    throw error;
  }
}