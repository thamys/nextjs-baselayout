import axios from "axios";
import nextSession from "next-session";

export const getSession = nextSession();

export const API = axios.create({
  baseURL: "https://6305ee7e697408f7edce9cd7.mockapi.io/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
