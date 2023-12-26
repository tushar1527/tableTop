import axios from "axios";

const token = localStorage.getItem("token");

export const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
