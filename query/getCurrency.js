const API = require("../variables/API");

const axios = require("axios");

const getCurrency = async (id) => {
    console.log(id)
    const response = await axios.get(`${API}/${id}`);
    const data = await response.data;
    console.log(data.data)
    return data.data;
};

module.exports = getCurrency;
