import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// Create a base Axios instance for general API requests
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" }, // Set a default content type
  withCredentials: true,
});

// Create an Axios instance for authenticated API requests
const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 1000,
  withCredentials: true,
});

// Middleware to append the token from cookies to the headers for authenticated requests
// authInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("token"); // Get the token from cookies
//     console.log(token, "tokentoken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`; // Set the Authorization header
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Create an Axios instance for FormData requests
const formDataInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  // timeout: false,
  headers: {
    "Content-Type": "multipart/form-data", // Set content type for FormData
  },
  withCredentials: true,
});

// Middleware to append the token from cookies to the headers for FormData requests
// formDataInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("token"); // Get the token from cookies
//     console.log(token, "TOKENNNNN");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`; // Set the Authorization header
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export { instance, authInstance, formDataInstance }; // Export both instances for use in your application
