import axios from 'axios';
const API= axios.create({baseURL:'http://localhost:5000'});
export const fetchTodos = () => API.get('/api/todos');
export const updatePos = (id,data) => API.put(`/api/todos/${id}`,data);
export const checkTodo = (id,data) => API.patch(`/api/todos/${id}`,data);
export const addTodo = (data) => API.post(`/api/todos`,data);