import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api", //base url from server
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
