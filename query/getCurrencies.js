const API = require("../variables/API");

const axios = require("axios");

const getCurrencies = async () => {
  const response = await axios.get(API);
  return await response.data.data;
};
module.exports = getCurrencies();
