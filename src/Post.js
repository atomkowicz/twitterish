import React from 'react';

const Post = (props) => {
    const { post } = props;

    return (
        <div className="post-list-item">
            <div className="post-details">
                <div className="post-title">{post.title}</div>
                <div className="post-body">{post.body}</div>
            </div>
        </div>
    )
};

export default Post;