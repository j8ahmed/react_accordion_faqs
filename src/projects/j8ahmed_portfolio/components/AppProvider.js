import React, { createContext, useContext, useReducer, useCallback } from 'react'
import reducer from '../assets/reducer'
import { default_state } from '../assets/defaults'

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, default_state)

    const load_page = useCallback( ()=> {
        dispatch({type:"TEST", payload:{}})
    }, [] )

    return (
        <AppContext.Provider value={{
            ...state,
            load_page,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
