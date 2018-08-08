import React from 'react';

const Post = (props) => {
    const { post } = props;

    return (
        <div className="Post" onClick={}>
            <div className="Post__inner">
                <div className="Post__title">{post.title}</div>
                <div className="Post__body">{post.body}</div>
            </div>
        </div>
    )
};

export default Post;