import "../css/product_page.css"
import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../components/AppProvider'
import { load_page, load_product_page } from '../assets/animations'
// const {log} = console

const ProductPage = () => {
    const { id } = useParams()
    const { current_product, load_single_product, isLoading } = useGlobalContext()

    useEffect(() => {
        load_page()
    }, [])
    
    useEffect(() => {
        load_single_product(id)
    }, [load_single_product, id])

    useEffect(() => {
        if(!isLoading) load_product_page()
    }, [isLoading])

    const { name, image, category, price, details } = current_product

    if(isLoading){
        return (
            <React.Fragment>
                <main className="site_page_container">
                    <Loader />
                </main>
                <button className="home_button"><Link to="/">Return to Home</Link></button>
            </React.Fragment>
        )
    } else {
        return (
            <main className="site_page_container">
                <div className="product_page_content_container">
                    <h1 className="product_page_title">{name}</h1>
                    <div className="product_details_container">
                        <div className="product_page_img_container">
                            <img src={image} alt={name}/>
                        </div>
                        <div className="product_text_container">
                            <h2 className="product_text_title">{name}</h2>
                            <h3 className="product_text_category">{category}</h3>
                            <h3 className="product_text_price">$ {price}.00</h3>
                            <p className="product_text_details">{details}</p>
                        </div>
                    </div>
                </div>
                <button className="home_button"><Link to="/">Return to Home</Link></button>
            </main>
        )
    }
    
}

export default ProductPage
