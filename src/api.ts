import axios from "axios";

export const API = axios.create({
  baseURL: "https://nextjs-baselayout.vercel.app/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
