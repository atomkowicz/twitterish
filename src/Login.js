import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


class Login extends Component {

    handleSubmit = (e) => {
        sessionStorage.setItem('twitterish-auth', true);
    }

    render() {
        return (
            <div className="Login">
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="password" placeholder="Your password" />
                    <button type="submit" className="Login__button" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;