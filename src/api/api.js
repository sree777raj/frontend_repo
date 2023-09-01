import axios from "axios";

const api = axios.create({
  baseURL: "http://167.71.233.53:8080/projectx", // Replace with your API base URL
});

const makeRequest = async (method, url, data, config) => {
 const response = await api.request({
      method,
      url,
      data,
      ...config,
    });
    return response.data;
  }


export default makeRequest;
