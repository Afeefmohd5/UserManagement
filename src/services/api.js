import axios from "axios";

const API = axios.create({
  baseURL: "https://usermanagement-416k.onrender.com",
});

export const getUsers = (params) => API.get("/users", { params });
export const createUser = (data) => API.post("/users", data);
export const deleteUser = (id) => API.delete(`/users/${id}`);
export const updateUser = (id, data) => API.put(`/users/${id}`, data);