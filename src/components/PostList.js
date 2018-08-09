import React, { Component } from 'react';
import Tile from './Tile';
import escapeRegExp from 'escape-string-regexp'
import { getPosts } from '../API';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

class PostList extends Component {

    constructor() {
        super();
        this.state = {
            query: "",
            visiblePosts: [],
            showModal: false,
            errMsg: ""
        }
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        });
    }

    async componentDidMount() {
        try {
            const posts = await getPosts();

            for (const post of posts) {
                await new Promise((_) => setTimeout(_, 1000));
                const updatedPosts =
                    [...this.state.visiblePosts, post].sort((a, b) => b.id - a.id);
                this.setState({ visiblePosts: updatedPosts })
            }

        } catch (err) {
            this.setState({
                showModal: true,
                errMsg: (err.message).toString()
            });
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

                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Error Modal">
                    <h2>Error {this.state.errMsg}</h2>
                    <div>Unable to fetch posts... Please try again later</div>
                    <Link to={"/"}>
                        <button>close</button>
                    </Link>
                </Modal>
            </div >
        );
    }
}

export default PostList;
