import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/bhargavjulaganti/mock-server",
  withCredentials: false,
  headers: { Accept: "application/json" },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
