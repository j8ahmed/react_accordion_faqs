import React, { createContext, useContext, useReducer, useCallback } from 'react'
import reducer from '../assets/reducer'
import { default_state } from '../assets/defaults.js'
const AppContext = createContext()
// const {log} = console

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, default_state)
    // const fakeFetch

    const fetch_products = useCallback( async (text) => {
        //mark this function as an async function
        //when I can setup an API replace below with an actual fetch await setup
        
        //fake async fetch of data from API
        const fake_fetch = () => {
            return new Promise( (resolve) => {
                setTimeout( ()=> {
                    const { products } = default_state
                    resolve(products)
                }, 1000 )
            } )
        }
        const products = await fake_fetch()
        const regex = new RegExp( `(${text})`, "i")
        const filtered_products = products.filter( (product) => regex.test(product.name) )
        
        dispatch( {type: "UPDATE_PRODUCT_LIST", payload: { isLoading:false, products: filtered_products }} )
    },[dispatch])
    
    const fetch_single_product = useCallback( async (id) => {
        //mark this function as an async function
        //when I can setup an API replace below with an actual fetch await setup
        
        //fake async fetch of data from API
        const fake_fetch = () => {
            return new Promise( (resolve) => {
                setTimeout( ()=> {
                    const { products } = default_state
                    const single_product = products.reduce( (acc, item) => item.id === +id ? item : acc )
                    resolve(single_product)
                }, 1500 )
            } )
        }
        const product = await fake_fetch()
        dispatch( {type: "UPDATE_CURRENT_PRODUCT", payload: { isLoading:false, current_product: product }} )

    },[dispatch])

    const handle_search = useCallback( (text) => {
        //set the state to loading until filtered dataset is returned from await async
        dispatch({type: "LOADING", payload:{isLoading:true} })

        //Async fetch prodcucts ( I wonder if I can filter directly in the API call. Depends on the API I guess. )
        fetch_products( text )
    },[dispatch, fetch_products])

    const load_single_product = useCallback( (id) => {
        dispatch({type: "LOADING", payload:{isLoading:true} })
        
        fetch_single_product(id)

    }, [dispatch, fetch_single_product])

    return (
        <AppContext.Provider value={{
            ...state,
            dispatch,
            handle_search,
            load_single_product,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
