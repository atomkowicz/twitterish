import React from 'react';
import Post from './Post'

const PostList = (props) => {
    const { posts } = props;

    return (
        <div className="PostList">
            {posts.sort((a, b) => b.id - a.id).map(post => <Post key={post.id} post={post} />)}
        </div>
    )
};


export default PostList;