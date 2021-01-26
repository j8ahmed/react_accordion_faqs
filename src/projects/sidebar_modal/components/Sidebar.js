import React, { useState } from 'react'
import { useGlobalContext } from './AppProvider'
import MenuButton from './MenuButton'
import { page_links, social_links } from '../assests/data'
import fire_logo from '../assests/fire_logo.svg'

const Sidebar = () => {
    const [ links ] = useState(page_links)
    const [ socialLinks ] = useState(social_links)
    const { showSidebar, setShowSidebar } = useGlobalContext()
    return (
        <aside className={`${!showSidebar ? "hide_sidebar" : ""} sidebar`}>
            <div className="sidebar_cont">

                <div className="sidebar_header">
                    <div className="logo_cont">
                        <img src={fire_logo} alt=""/>
                    </div>
                    <MenuButton 
                        isOpen={showSidebar}
                        toggleIsOpen={setShowSidebar} 
                    />
                </div>

                <div className={`links_cont`} >
                    <ul className="link_list">
                        {links.map((link) => {
                            const {id, url, text} = link
                            return (
                                <li key={id} className="page_link">
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="social_links_cont">
                    <ul className="social_link_list">
                        {socialLinks.map((link) => {
                            const {id, url, text} = link
                            return (
                                <li key={id} className="social_link">
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>


            </div>
        </aside>
    )
}

export default Sidebar
