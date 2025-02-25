import axios from "axios";

const host = "https://provinces.open-api.vn/api/";

const callAPI = async (api) => {
  const response = await axios.get(api);
  renderData(response.data, "province");
}
callAPI('https://provinces.open-api.vn/api/?depth=1');
const callApiDistrict = async (api) => {
  const response = await axios.get(api);
  renderData(response.data.districts, "district");
}
const callApiWard = async (api) => {
  const response = await axios.get(api);
  renderData(response.data.wards, "ward");
}

const renderData = (array, select) => {
  let row = '';
  array.forEach(element => {
    row += `<MenuItem value="${element.code}">${element.name}</MenuItem>`
  });
  document.querySelector("#" + select).innerHTML = row
}

export { callAPI, callApiDistrict, callApiWard };