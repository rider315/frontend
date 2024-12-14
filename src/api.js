import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" 
            ? "https://your-backend-url.com" // For production
            : "http://localhost:5000",        // For local development
});

export default instance;
