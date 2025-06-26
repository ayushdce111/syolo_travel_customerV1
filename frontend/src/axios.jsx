
import axios from 'axios';

const API = axios.create({
  baseURL: "https://customerv1-backend.onrender.com/",
  // baseURL: "http://localhost:8000"
});

export default API;