import React from 'react';
import Tile from './Tile'

const PostList = (props) => {
    const { posts, isReady } = props;

    return (
        <div className="TileList">
            {isReady ?
                <div className="Tile__inner">
                    {posts.sort((a, b) => b.id - a.id).map(post => <Tile key={post.id} post={post} />)}
                </div>
                : <div>loading ...</div>
            }
        </div>
    )
};


export default PostList;