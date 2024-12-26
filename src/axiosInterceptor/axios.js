import axios from "axios";

// Create Axios instance with base configuration
export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_Backend}`,
});
