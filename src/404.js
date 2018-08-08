import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = (props) => {

    return (
        <div className="error-page">
            <h1>Error 404 </h1>
            <p>no such page 
            <Link to={'/posts'}>
                <span> return to posts</span>
            </Link>
            </p>
        </div>
    )
};

export default PageNotFound;