import "../css/header.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="site_header">
            <div className="site_header_container">
                <div className="site_header_navbar">
                    <div className="header_navbar">
                        <div className="header_navbar_logo_container">
                            <h2>Temp Logo</h2>
                        </div>
                        <div className="header_navbar_mobile_menu_button_container">
                            <button className="header_navbar_mobile_menu_button">
                                <div className="btn_bar"></div>
                                <div className="btn_bar"></div>
                                <div className="btn_bar"></div>
                            </button>
                        </div>
                        <nav className="header_navbar_links_list_container">
                            <ul className="header_navbar_links_list">
                                <li className="header_navbar_link_item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="header_navbar_link_item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="header_navbar_link_item">
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li className="header_navbar_link_item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header
