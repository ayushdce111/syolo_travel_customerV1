
import axios from 'axios';

const API = axios.create({
  // baseURL: "https://customerv1-backend.onrender.com/",
  baseURL: "http://localhost:5000"
});

export default API;