import React from 'react'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const MenuItem = ({image, name, price, details}) => {
    return (
        <React.Fragment>
            <div className="menu_item" style={{visibility:'hidden'}}>
                <img src={image} alt={name}/>
                <div className="menu_item_text_cont">
                    <div className="menu_item_header">
                        <h2 className="menu_item_name">{name}</h2>
                        <h3 className="menu_item_price">{formatter.format(price)}</h3>
                    </div>
                    <p>{details}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MenuItem;
