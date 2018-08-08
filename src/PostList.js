import React, { Component } from 'react';
import Tile from './Tile';
import escapeRegExp from 'escape-string-regexp'


class PostList extends Component {

    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        });
    }

    resetQuery = () => {
        this.setState({
            query: ""
        })
    }


    render() {
        let postToShow;


        const { posts, isReady } = this.props;
        const { query } = this.state;

        if (query) {
            const match = new RegExp(escapeRegExp(query), "i");
            postToShow = posts.filter((post) => match.test(post.title) || match.test(post.body));
        } else {
            postToShow = posts;
        }

        return (
            <div className="TileList">
                <div className="Header">
                    <button>Logout</button>
                    <input
                        type="text"
                        placeholder="search"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)} />
                </div>
                {isReady ?
                    <div className="Tile__inner">
                        {postToShow.sort((a, b) => b.id - a.id).map(post => <Tile key={post.id} post={post} />)}
                    </div>
                    : < div > loading ...</div>}
            </div >
        );
    }
}

export default PostList;
