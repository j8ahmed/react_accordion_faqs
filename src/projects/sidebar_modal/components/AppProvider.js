import React, { createContext, useContext, useState, } from 'react'
const { log } = console
const AppContext = createContext()

const AppProvider = ({children}) => {
    const [ showSidebar, setShowSidebar ] = useState(false)
    const [ showModal, setShowModal ] = useState(false)

    return (
       <AppContext.Provider value={{showSidebar, showModal, setShowSidebar, setShowModal}}>
           {children}
       </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }


