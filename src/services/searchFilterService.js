import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5555/api';

export const getAllFilter = async () => {
  console.log("API_URL", API_URL);
  try {
    const response = await axios.get(API_URL + `/search/filter/get-all`);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all filters:", error);
    throw error;
  }
}

export const getFilterByKey = async (key) => {

  try {
    console.log("key", key);
    const response = await axios.get(`${API_URL}${key}`);
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all filters:", error);
    throw error;
  }
}

