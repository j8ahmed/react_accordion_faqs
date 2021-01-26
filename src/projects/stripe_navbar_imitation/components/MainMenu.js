import React, { useCallback } from 'react'
import { useGlobalContext } from './AppProvider'
const { log } = console

const MainMenu = () => {
    const {
        links,
        subMenuPointer,
        displaySubMenu,
        shrinkSubMenu,
    } = useGlobalContext()

    const getCoordinates = useCallback( (menu_item) => {
        const parentX = subMenuPointer.current.parentNode.getBoundingClientRect().x
       
        const { left, right } = menu_item.getBoundingClientRect()        
        const newX = ( (left + right)/2 )  - parentX
        
        const text = menu_item.textContent
        const coordinates = { x:newX, y:0 }

        displaySubMenu(text, coordinates);
        
    },[subMenuPointer])


    return (
        <ul className="site_header_nav_list">
            {links.map((section) => {
                const { id, page } = section
                return (
                    <li key={id} className="site_header_nav_item" 
                    onMouseOver={ (e) => getCoordinates(e.target)} 
                    onMouseLeave={(e) => {
                        
                        const { clientY } = e
                        const { bottom } = e.target.getBoundingClientRect()

                        if(clientY < (bottom - 15) ) shrinkSubMenu()
                    }}>
                        <button className="site_header_nav_item_link">
                            {page}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default MainMenu
