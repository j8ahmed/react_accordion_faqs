import React, { useEffect } from 'react'
import Product from './Product'
import Loader from './Loader'
import { useGlobalContext } from './AppProvider'
import { load_products } from '../assets/animations'
// const {log} = console

const ProductsList = () => {
    const { isLoading, products, handle_search } = useGlobalContext()
    

    useEffect(() => {
        handle_search("")
    }, [handle_search])

    useEffect(() => {
        let to
        if(!isLoading){
            to = setTimeout( ()=> {
                load_products()
            }, 500)
        } 
        return () => clearTimeout(to)
        
    }, [isLoading])

    if(isLoading){
        return <Loader />
    } else if(products.length <= 0){
        return (
            <div className="products_list_container">
                <h2>No matching results...</h2>
            </div>
        )
    } else {
        return (
            <div className="products_list_container">
                <ul className="product_list">
                    {products.map( (item) => {
                        const { id } = item
                        return (
                            <li key={id} className="product_item">
                                <Product {...item}/>
                            </li>
                        )
                    } )}
                </ul>
            </div>
        )
    }

    
}

export default ProductsList
