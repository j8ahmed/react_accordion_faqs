import React from 'react'
import { Link } from 'react-router-dom'
// const {log} = console

const Product = ({ id, name, image, category, price }) => {
    return (
        <React.Fragment>
            <Link to={`/product${id}`}>
                <div className="product_img_container">
                    <img src={image} alt={name}/>
                </div>
            </Link>
            <div className="product_info_container">
                <div className="product_card_header">
                    <div className="product_name_and_category_container">
                        <h2 className="product_card_name">{name}</h2>
                        <h3 className="product_card_category">{category}</h3>
                    </div>
                    <h3 className="product_card_price">$ {price}.00</h3>
                </div>
                <h4 className="product_page_link"><Link to={`/product${id}`}>Details</Link></h4>
            </div>
        </React.Fragment>
    )
}

export default Product


