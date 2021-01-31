import React, { useRef, useCallback } from 'react'
import { useGlobalContext } from './AppProvider'
import { remove_item_anim, remove_last_item_anim } from '../assets/animations'

const CartItem = ({ id, name, price, quantity, image }) => {
    const cart_item = useRef(null)
    const { 
        state:{items}, 
        dispatch 
    } = useGlobalContext()

    const string_price = useCallback( () => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    }, [price])
    
    const remove_item = useCallback( () => {
        let tl;
        //check if last item in cart
        if(items.length === 1){
            tl = remove_last_item_anim()
        } else {
            tl = remove_item_anim(cart_item.current)
        }
        tl.add( () => {
            const new_items = items.filter( (item) => item.id !== id )
            dispatch({ type:"REMOVE ITEM", payload:{ items: new_items } })
        }, ">0.25")
        
    }, [items, id, dispatch])

    const change_item_quantity = (num) => {
        //check for zero value
        if (quantity + num <= 0){
            remove_item()
        } else {

            let new_item = items.find( (item) => item.id === id )
            new_item.quantity = quantity + num

            const new_items = items.map( (item) => {
                if(item.id === id) return new_item
                else return item
            } )
            dispatch({ type:"CHANGE ITEM QUANTITY", payload:{ items: new_items } })
        }
    }

    return (
        <li className="cart_item" ref={cart_item}>
            <div className="cart_item_info_container">
                <div className="cart_item_img_container">
                    <img src={image} alt={name}/>
                </div>
                <div className="cart_item_text_container">
                    <h3>{name}</h3>
                    <h4>{string_price()}</h4>
                    <button className="cart_item_remove_btn" onClick={remove_item}>Remove</button>
                </div>
            </div>
            <div className="cart_item_quantity_tool">
                <button className="cart_item_quantity_btn" onClick={()=> change_item_quantity(1)}><i className="fas fa-chevron-up"></i></button>
                <h3>{quantity}</h3>
                <button className="cart_item_quantity_btn" onClick={()=> change_item_quantity(-1)}><i className="fas fa-chevron-down"></i></button>
            </div>
        </li>
    )
}

export default CartItem
