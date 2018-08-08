import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {

    render() {
        return (
            <div className="Login">
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="password" />
                    <button type="submit" className="Login__button">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;