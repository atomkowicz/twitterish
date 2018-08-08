import React, { Component } from 'react';
import { getPost } from './API';
import Modal from 'react-modal';

class Post extends Component {

    constructor() {
        super();
        this.state = {
            post: {},
            isFetched: false,
            showModal: false,
            errMsg: ""
        }

    }

    componentDidMount() {
        const { id } = this.props.match.params;

        getPost(id).then(post => {
            this.setState({
                post,
                isFetched: true
            })
        }).catch(err => {
            this.props.history.push(`/404`);
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }



    render() {

        const { isFetched, showModal, post: {id, title, body, userId } } = this.state;
        const names = ["Spryga", "Shenanigans", "Fiddledeedee", "Bovicide", "Bloviate", "CluelBean", "Leukoplakia"];
        const author = names[Math.floor(Math.random() * 8) + 1];

        return (
            <div className="Post">
                {isFetched ?
                    <div className="Post__inner">
                        <div className="Post__id">Post Id: {id}</div>
                        <div className="Post__userid">Author Id: {userId}</div>
                        <div className="Post__author">Author name: {author}</div>
                        <div className="Post__title">{title}</div>
                        <div className="Post__body">{body}</div>
                    </div>
                    : <div>loading ...</div>
                }

                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal">
                    <h2 >Error</h2>
                    <div>Something's wrong...{this.state.errMsg}</div>
                    <button onClick={(e) => this.setState({ showModal: false })}>close</button>
                </Modal>
            </div>


        );
    }
}

export default Post;
