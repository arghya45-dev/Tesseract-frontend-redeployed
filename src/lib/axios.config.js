import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tesseract-backend-redeployed.onrender.com/api",
  // baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
