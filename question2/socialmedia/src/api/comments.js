import axios from 'axios';
const API_URL = "http://20.244.56.144/test";
export const fetchComments = async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data.comments;
};
