import axios from 'axios';
const API_URL = "http://20.244.56.144/test";
export const fetchPosts = async (type) => {
    const response = await axios.get(`${API_URL}/posts?type=${type}`);
    return response.data.posts;
};
