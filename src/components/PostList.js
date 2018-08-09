import React, { Component } from 'react';
import Tile from './Tile';
import escapeRegExp from 'escape-string-regexp'
import { getPosts } from '../API';

class PostList extends Component {

    constructor() {
        super();
        this.state = {
            query: "",
            visiblePosts: [],
        }
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        });
    }

    async componentDidMount() {
        const posts = await getPosts();
        for (const post of posts) {
            await new Promise((_) => setTimeout(_, 1000));
            const updatedPosts =
                [...this.state.visiblePosts, post].sort((a, b) => b.id - a.id);
            this.setState({ visiblePosts: updatedPosts })
        }
    }


    render() {
        const { visiblePosts, query } = this.state;

        const match = new RegExp(escapeRegExp(query), "i");
        const tiles = visiblePosts
            .filter((post) => match.test(post.title) || match.test(post.body))
            .map((post, index) => <Tile key={post.id} post={post} />);

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
                {tiles.length > 0
                    ? <div className="Tile__container">{tiles}</div>
                    : <div> loading ...</div>}
            </div >
        );
    }
}

export default PostList;
