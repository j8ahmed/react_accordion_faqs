import React, { createContext, useContext, useState, useCallback, useRef } from 'react'
import { page_links } from '../assests/data'
const AppContext = createContext()
const { log } = console

const AppProvider = ({children}) => {
    const [ links ] = useState(page_links)
    const [ location, setLocation ] = useState({})
    const [ page, setPage ] = useState({page: "", links: []})
    const [ isSubMenuOpen, setIsSubMenuOpen ] = useState(false)
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false)
    const [ showModal, setShowModal ] = useState(false)

    const subMenuPointer = useRef(null);
    const subMenuSection = useRef(null);

    const displaySubMenu = useCallback((text, coordinates) => {
        const page = links.find( (page_link) => page_link.page === text )
        setPage(page)
        setLocation(coordinates)
        setIsSubMenuOpen(true)
    }, [])

    const shrinkSubMenu = useCallback( () => {
        const section_container = subMenuSection.current
        section_container.style.width = `${0}px`
        section_container.style.height = `${0}px`
        
        closeSubMenu()
    },[subMenuSection])

    const keepSubMenuOpen = useCallback( () => {
        setIsSubMenuOpen(true)
    }, [])

    const closeSubMenu = useCallback( () => {
        setIsSubMenuOpen(false);
    }, [])

    const toggleIsSidebarOpen = useCallback(() => {
        setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
    }, [])

    return (
       <AppContext.Provider value={{
           links, 
           showModal, 
           isSidebarOpen,
           isSubMenuOpen,
           subMenuPointer,
           subMenuSection,
           location,
           page,
           setShowModal,
           displaySubMenu,
           keepSubMenuOpen,
           shrinkSubMenu,
           closeSubMenu, 
           toggleIsSidebarOpen,
        }}>
           {children}
       </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }


