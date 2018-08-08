import React, { Component, Fragment } from 'react';

class Header extends Component {


    render() {
        const { auth } = this.props;

        return (
            <React.Fragment>
                {auth ?
                    <header className="Header">
                        <button>Logout</button>
                        <input type="text" placeholder="search" />
                    </header>
                    :
                    <header className="Header">
                        <div class="title">Twitterish</div>
                    </header>
                }
            </React.Fragment>
        );
    }
}

export default Header;