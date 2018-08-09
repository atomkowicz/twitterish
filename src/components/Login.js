import React, { Component } from 'react';
import {AUTH_STORAGE_KEY} from '../const';

class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        var object = {};
        formData.forEach((value, key)=> {
            object[key] = value;
        });
        var json = JSON.stringify(object);
        sessionStorage.setItem(AUTH_STORAGE_KEY, json);
        this.props.history.push(`/posts`);
    }

    render() {

        return (
            <div className="Login">
                <form name="loginform" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        title="At least 5 characters long"
                        name="username"
                        pattern=".{5,}"
                        placeholder="Your name"
                        required={true} />
                    <input
                        type="password"
                        name="password"
                        title="At least 8 characters, at least one small letter, at least one capital letter, at least one number"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        placeholder="Your password"
                        required={true} />
                    <button type="submit">Login</button>
                </form>
                <span className="Login__hint"> * Any username and any password,
                username is at least 5 characters long, password contains 8 characters,
                at least one small letter, at least one capital letter, at least one number</span>
            </div>
        );
    }
}

export default Login;