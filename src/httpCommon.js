const axios = require("axios");

const http = axios.create({
  baseURL: process.env.ITUNES_EXTERNAL_API_URL,
  headers: {
    "content-type": "application/json",
  },
});

module.exports = http