const API = require("../variables/API");

const axios = require("axios");

const getCurrencyHistory = async ({ id }) => {
  const response = await axios.get(`${API}/${id}/history?interval=d1`);
  return await response.data.data;
};

module.exports = getCurrencyHistory({});
