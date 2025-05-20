import axios from "axios";

export const apiUrl = "http://localhost:5555/api"; 

export const getAllFilter = async () => {
  try {
    const response = await axios.get(`${apiUrl}/search/filter/get-all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all filters:", error);
    throw error;
  }
}