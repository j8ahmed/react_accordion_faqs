import React from 'react'

const MenuButton = ({isOpen, toggleIsOpen, cssClass}) => {
    const btnClass = isOpen ? "btn_bar close_btn" : "btn_bar"
    return (
        <button className={`${cssClass ? cssClass : ""} menu_btn`} onClick={toggleIsOpen}>
            <div className={btnClass}></div>
            <div className={btnClass}></div>
            <div className={btnClass}></div>
        </button>
    )
}

export default MenuButton
