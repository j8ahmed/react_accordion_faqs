import "../css/header.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="site_header">
            <div className="site_header_navbar_container">
                <div className="site_header_logo_container">
                    <h1 className="site_header_logo_title">Products App</h1>
                </div>
                <nav className="site_header_page_links_container">
                    <ul className="site_header_page_links_list">
                        <li className="site_header_page_link">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="site_header_page_link">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
