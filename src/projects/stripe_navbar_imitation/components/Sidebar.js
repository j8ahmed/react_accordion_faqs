import React, { useState } from 'react'
import { useGlobalContext } from './AppProvider'
import MenuButton from './MenuButton'
import { page_links } from '../assests/data'
import stripe_logo from '../assests/stripe_logo.svg'

const Sidebar = () => {
    const [ pageLinks ] = useState(page_links)
    const { isSidebarOpen, toggleIsSidebarOpen } = useGlobalContext()
    return (
        <aside className={`${!isSidebarOpen ? "hide_mobile_menu" : ""} site_mobile_menu`}>

            <div className="site_mobile_menu_header">
                <div className="logo_container">
                    <img src={stripe_logo} alt=""/>
                </div>
                <MenuButton 
                    isOpen={isSidebarOpen}
                    toggleIsOpen={toggleIsSidebarOpen} 
                />
            </div>

            <div className={`site_mobile_menu_sections_container`} >
                <ul className="site_mobile_menu_sections_list">
                    {pageLinks.map((section) => {
                        const { id, page, links } = section
                        
                        return (
                            <li key={id} className="site_mobile_menu_section">

                                <h3 className="site_mobile_menu_section_heading">{page}</h3>
                                <ul className="site_mobile_menu_section_pages_list">
                                    {links.map( (link) => {
                                        const { id, label, icon, url } = link

                                        return (
                                            <li key={id} className="site_mobile_menu_section_item page_link">
                                                <a className="site_mobile_menu_section_item_link" href={url}>
                                                    <span className="site_mobile_menu_section_item_link_icon">{icon}</span>
                                                    <span className="site_mobile_menu_section_item_link_label">{label}</span>
                                                    
                                                </a>
                                            </li>
                                        )
                                    } )}
                                    
                                </ul>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar
