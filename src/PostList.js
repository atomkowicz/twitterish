import React from 'react';
import Post from './Post'

const PostList = (props) => {
    const { posts } = props;

    return (
        <div className="post-list">
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
};


export default PostList;