import {API_URL} from './const';

const headers = {
    'Accept': 'application/json'
};

export const getPosts = () => {
    return fetch(`${API_URL}/posts`, { headers })
        .then(response => response.json())
        .then(data => data);
}

export const getPost = (postId) => {
    return fetch(`${API_URL}/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response;
        })
        .then(response => response.json())
        .then(data => data)
}
