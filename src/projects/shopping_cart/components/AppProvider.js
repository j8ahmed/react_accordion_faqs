import React, { createContext, useContext, useReducer } from 'react'
import { reducer } from '../assets/reducer'
import { defaultState } from '../assets/defaults'
const AppContext = createContext()


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    return (
        <AppContext.Provider value={{
           state,
           dispatch, 
           test: "Hello test"
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
