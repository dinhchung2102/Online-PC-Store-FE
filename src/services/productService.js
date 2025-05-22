import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5555/api';

export const getAllProducts = async () => {
    const response = await axios.get(API_URL + '/search/product/get-all');
    return response;
}