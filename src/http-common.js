const axios = require("axios");

const http = axios.create({
  baseURL: process.env.MIX_OCULAR_LISTEN_API_URL,
  headers: {
    "content-type": "application/json",
  },
});

module.exports = http