import { API_URL } from './const';

const headers = {
    'Accept': 'application/json'
};

export const getPosts = () =>
    fetch(`${API_URL}/posts`, { headers })
        .then(response => {
            if (!response.ok) throw Error(response.status);
            return response;
        })
        .then(response => response.json())


export const getPost = (postId) =>
    fetch(`${API_URL}/posts/${postId}`)
        .then(response => {
            if (!response.ok) throw Error(response.status);
            return response;
        })
        .then(response => response.json())

