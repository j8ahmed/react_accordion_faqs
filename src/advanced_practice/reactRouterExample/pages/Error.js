import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <h2>404 Error</h2>
            <h4>Page not found.</h4>
            <Link to='/'>Return Home</Link>
        </div>
    )
}

export default Error
