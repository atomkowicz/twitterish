import React, { Component } from 'react';
import PostList from './PostList';
import Post from './Post';
import Login from './Login';
import Header from './Header';
import PageNotFound from './404';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AUTH_STORAGE_KEY } from '../const';
import '../App.css';

class App extends Component {

  constructor() {
    super();
    const credentials = sessionStorage.getItem(AUTH_STORAGE_KEY) ? true : false;
    this.state = {
      isUserLoggedIn: credentials
    }
  }

  render() {
    const isUserLoggedIn = sessionStorage.getItem(AUTH_STORAGE_KEY) ? true : false;

    return (
      <div className="App">
        <div className="container">
          <Header />

          <Switch>

            <Route exact path="/"
              component={Login} />

            <Route exact path="/posts"
              render={() => (
                isUserLoggedIn ? <PostList /> : <Redirect to='/' />
              )} />

            <Route exact path="/posts/:id"
              render={(props) => (
                isUserLoggedIn ? <Post {...props} /> : <Redirect to='/' />
              )} />

            <Route exact path='*'
              component={PageNotFound} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
