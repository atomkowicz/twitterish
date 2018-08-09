import React, { Component } from 'react';
import Tile from './Tile';
import escapeRegExp from 'escape-string-regexp'
import { getPosts } from '../API';

class PostList extends Component {

    constructor() {
        super();
        this.state = {
            query: "",
            posts: [],
        }
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        });
    }

    resetQuery = () => {
        this.setState({
            query: ""
        })
    }

    componentDidMount() {
        getPosts().then(posts => {
            this.setState({
                posts
            })
        })
    }


    render() {
        let postToShow = [];
        const { posts, query } = this.state;

        if (query) {
            const match = new RegExp(escapeRegExp(query), "i");
            postToShow = posts.filter((post) => match.test(post.title) || match.test(post.body));
        } else {
            postToShow = posts;
        }

        const sortedPosts = postToShow
            .sort((a, b) => b.id - a.id)
            .map((post, index) => <Tile key={post.id} showTile={false} post={post} />);


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
                {postToShow
                    ? <div className="Tile__container">{sortedPosts}</div>
                    : < div > loading ...</div>}
            </div >
        );
    }
}

export default PostList;
