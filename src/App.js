import React, { Component } from 'react';
import { getPosts, getPost } from './API';
import PostList from './PostList';
import Post from './Post';
import Login from './Login';
import './App.css';
import Header from './Header';
import { Route, Link } from 'react-router-dom';

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
          <Header auth={true}/>
          <Route exact path="/" render={() =>  <Login />} />
          <Route exact path="/posts" render={() =>  <PostList posts={this.state.posts} />} />
          <Route exact path="/post/1" render={() =>  <Post post={this.state.posts[1]} />} />
         
        </div>
      </div>
    );
  }
}

export default App;
