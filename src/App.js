import React, { Component } from 'react';
import { getPosts } from './API';
import PostList from './PostList';
import Post from './Post';
import Login from './Login';
import './App.css';
import Header from './Header';
import PageNotFound from './404';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      isUserLoggedIn: false,
      isPostListFetched: false
    }
  }


  componentDidMount() {
    getPosts().then(posts => {
      this.setState({
        posts,
        isPostListFetched: true
      })
    })
    sessionStorage.setItem('twitterish-auth', this.state.isUserLoggedIn);
  }

  render() {
    let { posts, isUserLoggedIn,isPostListFetched } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Header isUserLoggedIn={isUserLoggedIn} />
          <Switch>
            <Route exact path="/" render={() => <Login />} />
            <Route exact path="/posts" render={() => <PostList posts={posts} isReady={isPostListFetched}/>} />
            <Route exact path="/posts/:id" component={Post} />
            <Route path='*' exact component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
