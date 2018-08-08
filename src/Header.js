import React, { Component } from 'react';

class Header extends Component {


    render() {
        const { isUserLoggedIn } = this.props;

        return (
            <React.Fragment>
                {isUserLoggedIn ?
                    <header className="Header">
                        <button>Logout</button>
                        <input type="text" placeholder="search" />
                    </header>
                    :
                    <header className="Header">
                        <div className="title">Your table</div>
                    </header>
                }
            </React.Fragment>
        );
    }
}

export default Header;