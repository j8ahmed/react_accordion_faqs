import React from 'react'
import "../css/loader.css"
const Loader = () => {
    return (
        <div className="loader_container">
            <h1>Loading...</h1>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}

export default Loader
