import React, { Component } from 'react';
import { getPosts, getPost } from './API';
import PostList from './PostList';
import './App.css';
import Header from './Header';

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    getPosts().then(posts => {
      this.setState({
        posts
      })
    })
  }

  render() {
    let { posts } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header />
          <PostList posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
