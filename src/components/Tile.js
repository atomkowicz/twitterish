import React from 'react';
import { Link } from 'react-router-dom';

const Tile = (props) => {
    const { post } = props;

    return (
        <div className="Tile">
            {post && <div className="Tile__inner">
                <Link to={{ pathname: `/posts/${post.id}`, state: { post: post } }}>
                    <div className="Tile__title">{post.title}</div>
                </Link>
                <div className="Tile__body">{post.body}</div>
            </div>}
        </div>
    )
};

export default Tile;
