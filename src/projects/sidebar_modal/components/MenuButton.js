import React from 'react'

const MenuButton = ({isOpen, toggleIsOpen}) => {
    const btnClass = isOpen ? "btn_bar close_btn" : "btn_bar"
    return (
        <button className="menu_btn" onClick={ 
            () => toggleIsOpen( (showPageLinks) => !showPageLinks )}>
            <div className={btnClass}></div>
            <div className={btnClass}></div>
            <div className={btnClass}></div>
        </button>
    )
}

export default MenuButton
