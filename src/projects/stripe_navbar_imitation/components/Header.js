import "../css/header.css"
import React, { useEffect } from 'react'
import MainMenu from './MainMenu'
import SubMenu from './SubMenu'
import Sidebar from './Sidebar'
import MenuButton from './MenuButton'
import { useGlobalContext } from './AppProvider'
import stripe_logo from '../assests/stripe_logo.svg'
const { log } = console

const Header = () => {
    const { 
        isSidebarOpen,
        toggleIsSidebarOpen,
        showSubMenu,
    } = useGlobalContext()
    
    return (
        <header className="site_header">

            <div className="site_header_container">

                <div className="site_header_nav_container">

                    <div className="logo_container">
                        <img src={stripe_logo} alt=""/>
                    </div>

                    <nav className="site_header_nav">
                        <MainMenu />
                    </nav>

                    <nav className="site_header_cta_nav">
                        <a className="cta_btn" href="/#">
                            Sign in <i className="fas fa-chevron-right"></i>
                        </a>
                    </nav>
                    
                    <MenuButton 
                        cssClass="site_header_menu_nav"
                        isOpen={isSidebarOpen}
                        toggleIsOpen={toggleIsSidebarOpen} 
                    />
                </div>

                <div className="site_mobile_menu_container">
                    <Sidebar />
                </div>

                <div className="site_submenu_container"> 
                   <SubMenu />
                </div>
            </div>
        </header>
    )
}

export default Header
