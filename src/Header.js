import React, { Component } from 'react';

class Header extends Component {


    render() {
        const { isUserLoggedIn } = this.props;

        return (
            <header className="Header">
                <div className="title">Some name</div>
            </header>
        );
    }
}

export default Header;