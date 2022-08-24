const API = require("../variables/API");

const axios = require("axios");

const getCurrencies = async () => {
  const response = await axios.get(API);
  const data = await response.data;
  return data.data;
};
module.exports = getCurrencies;
