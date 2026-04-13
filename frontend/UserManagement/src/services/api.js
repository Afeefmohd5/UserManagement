import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getUsers = (params) => API.get("/users", { params });
export const createUser = (data) => API.post("/users", data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);