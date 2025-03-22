import axios from 'axios';
const API_URL = "http://20.244.56.144/test";
export const fetchUsers = async () => {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.users;
};
