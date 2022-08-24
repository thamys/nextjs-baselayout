import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
