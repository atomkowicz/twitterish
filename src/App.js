import React, { Component } from 'react';
import { getPosts, getPost } from './API';
import PostList from './PostList';
import './App.css';

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
        <header className="App-header">
          <h1 className="App-title">Welcome to Tweeterish</h1>
        </header>
        <div className="container">
          <PostList posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
