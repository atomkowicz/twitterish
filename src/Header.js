import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="Header">
                <button>Logout</button>
                <input type="text" placeholder="search" />
            </header>
        );
    }
}

export default Header;