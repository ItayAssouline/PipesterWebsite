import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export default apiClient;
