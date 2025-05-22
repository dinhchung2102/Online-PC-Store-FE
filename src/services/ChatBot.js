import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5555/api';

export const sendMessageChatBot = async (message) => {

  try {
    const response = await axios.post(API_URL + `/search/gemini/generate`, {
      prompt: message,
      model: "gemini-2.0-flash"
    }, {
      headers: {
        Authorization: `Bearer ${"chiuAnhChung"}`,
      },
    }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending message to chatbot:", error);
    throw error;
  }
}