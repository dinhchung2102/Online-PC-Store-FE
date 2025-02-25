import axios from "axios";

const host = "https://provinces.open-api.vn/api/";

const callAPI = async (api) => {
  const response = await axios.get(api);
  return response.data;
}

const callApiDistrict = async (api) => {
  const response = await axios.get(api);
  return response.data;
}

const callApiWard = async (api) => {
  const response = await axios.get(api);
  return response.data;
}


export { callAPI, callApiDistrict, callApiWard, host };