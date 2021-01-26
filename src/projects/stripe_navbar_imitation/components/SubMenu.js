import React, { useEffect, useCallback, useRef } from 'react'
import { useGlobalContext } from './AppProvider'
const { log } = console

const SubMenu = () => {
    const init = useRef(false);
    const { 
        isSubMenuOpen,
        subMenuPointer,
        subMenuSection,
        location,
        keepSubMenuOpen,
        shrinkSubMenu,
        closeSubMenu,
        page: { page, links },
    } = useGlobalContext()

    const expandSubMenuSection = useCallback( () => {
        const section_container = subMenuSection.current
        const section_list = section_container.children[1]
        const num_items = section_list.children.length
        
        const { width, height } = section_container.children[0].getBoundingClientRect()
        const { width:list_item_width, height:list_item_height } = section_list.children[0].getBoundingClientRect()
        
        const new_height = height + ( list_item_height * num_items/2 ) + 150
        const new_width = list_item_width * num_items
        // log(`List Item width: ${list_item_width}`)
        // log(`New section width: ${new_width}`)


        section_container.style.width = `${new_width > 800 ? 800 : new_width}px`
        section_container.style.height = `${new_height}px`
        
    }, [subMenuSection])

    useEffect(() => {
        if(init.current && isSubMenuOpen) expandSubMenuSection()
    
        const { x } = location
        subMenuPointer.current.style.left = `${x}px`
    }, [location])

    useEffect(() => {
        init.current = true
    }, [])

    return (
        <div 
            className={isSubMenuOpen ? "site_submenu_card_container" : "site_submenu_card_container hide_site_submenu_card_container"} 
            
        >
            
                <svg className="site_submenu_card_icon" ref={subMenuPointer} 
                viewBox="0 0 16 16" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M -4.4999999e-8,7.9999994 8.0000003,0 16,7.9999994 Z" id="rect835" />
                </svg>
                
                
                <div className="site_submenu_card_section_container"  >
                    <div className="site_submenu_card_section" ref={subMenuSection}
                    onMouseOver={keepSubMenuOpen} 
                    onMouseLeave={shrinkSubMenu}>

                        <h3 className="site_submenu_card_section_heading">{page}</h3>
                        <ul className="site_submenu_card_section_pages_list">
                            {links.map( (link) => {
                                const { id, label, icon, url } = link

                                return (
                                    <li key={id} className="site_submenu_card_section_item page_link">
                                        <a className="site_submenu_card_section_item_link" href={url}>
                                            <span className="site_submenu_card_section_item_link_icon">{icon}</span>
                                            <span className="site_submenu_card_section_item_link_label">{label}</span>
                                            
                                        </a>
                                    </li>
                                )
                            } )}
                            
                        </ul>
                    </div>
                </div>
                
        
            
            
        </div>
    )
}

export default SubMenu
