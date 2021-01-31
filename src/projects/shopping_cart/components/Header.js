import React from 'react'
import { useGlobalContext } from './AppProvider'

const Header = () => {
    const { 
        state: { items }
    } = useGlobalContext()

    const num_items = () => {
        return (
            items.length > 0 ? 
            items.map( (item) => item.quantity ).reduce((a,b) => a + b) : 0
        )
    }

    return (
        <header className="app_header">
            <div className="app_header_container">
                
                <h1 className="header_title">Shopping Cart</h1>
                
                <div className="header_shopping_cart">
                    <h4 className="cart_size">{num_items()}</h4>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </header>
    )
}

export default Header
