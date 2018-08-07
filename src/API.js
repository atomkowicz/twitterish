const API_URL = "https://jsonplaceholder.typicode.com";

const headers = {
    'Accept': 'application/json'
};

export const getPosts = () => {
    return fetch(`${API_URL}/posts`, { headers })
        .then(resp => resp.json())
        .then(data => data);
}

export const getPost = (postId) => {
    return fetch(`${API_URL}/posts/${postId}`)
        .then(resp => resp.json())
        .then(json => console.log(json))
}
