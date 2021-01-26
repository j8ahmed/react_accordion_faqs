import React from 'react'

const MenuButton = ({menuOpen, setShowPageLinks}) => {
    const btnClass = menuOpen ? "btn_bar close_btn" : "btn_bar"
    return (
        <div className="menu_btn" onClick={ 
            () => setShowPageLinks( (showPageLinks) => !showPageLinks )}>
            <div className={btnClass}></div>
            <div className={btnClass}></div>
            <div className={btnClass}></div>
        </div>
    )
}

export default MenuButton
