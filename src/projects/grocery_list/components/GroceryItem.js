import React from 'react'

const GroceryItem = ({index, name, edit, deleteItem}) => {
    return (
        <li id={`item_${index}`} className={"grocery_item"}>
            <h4>{name}</h4>
            <div>
                <button className="edit_btn" 
                onClick={()=>{
                    edit(index)
                }}><i className="fas fa-edit"></i></button>

                <button className="delete_btn"
                onClick={()=>{
                    deleteItem(index)
                }}><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>
    )
}

export default GroceryItem
