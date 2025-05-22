import { apiUrl } from "./utils";
import axios from "axios";

export const getAllProducts = async () => {
    const response = await axios.get(apiUrl + '/search/product/get-all');
    return response;
}