const API = require("../variables/API");

const axios = require("axios");

const getCurrencies = async (limit, offset) => {
  const response = await axios.get(`${API}?limit=${limit}&offset=${offset}`);
  const data = await response.data;
  return data.data;
};
module.exports = getCurrencies;
