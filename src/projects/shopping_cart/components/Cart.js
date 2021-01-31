import React, { useEffect, useCallback, useRef } from 'react'
import { useGlobalContext } from './AppProvider'
import { remove_all_items, reload_cart } from '../assets/animations'
import CartItem from './CartItem'

const Cart = () => {
    const { state:{items}, dispatch } = useGlobalContext()
    const cart_items_list = useRef(null)
    const init = useRef(false)

    const total_price = useCallback( () => {
        const price = items.length > 0 ? 
        items.map( (item) => item.price * item.quantity ).reduce((a,b) => a + b) : 0
        
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    }, [items])

    const clear_cart = useCallback(() => {
        const tl = remove_all_items()
        tl.add( () => {
            dispatch({ type: "REMOVE ALL ITEMS", payload:{} })
        }, ">0.5")
    }, [dispatch])
    
    useEffect(() => {
        if(init.current && items.length <= 0) reload_cart()
    }, [items])

    useEffect(() => {
        init.current = true
    }, [])

    if(items.length > 0 ){
        return (
            <main className="cart_container">
            <h2 className="cart_header">Your Cart</h2>
            <div className="cart_items_container">
                <ul className="cart_items_list" ref={cart_items_list}>
                    {items.map( (item) => {
                        const { id } = item
                        return <CartItem key={id} {...item}/>
                    } )}
                </ul>
            </div>
            <div className="cart_footer_container">
                <div className="cart_total">
                    <h3>Total</h3>
                    <h3>{total_price()}</h3>
                </div>
                <button className="cart_clear_items_btn" onClick={clear_cart}>Clear Cart</button>
            </div>
        </main>
        )
    } else{
        return (
            <main className="cart_container">
                <h2 className="cart_header">Your Cart</h2>
                <div className="cart_items_container">
                    <h4>Is currently empty...</h4>
                </div>
            </main>
        )

    }
}

export default Cart
