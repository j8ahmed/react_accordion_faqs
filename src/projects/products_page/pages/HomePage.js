import "../css/home.css"
import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import ProductsList from '../components/ProductsList'
import { load_page } from '../assets/animations'

const HomePage = () => {

    useEffect(() => {
        load_page()
    }, [])

    return (
        <React.Fragment>
            <main className="site_page_container">
                <SearchBar />
                <ProductsList />
            </main>
        </React.Fragment>
    )
}

export default HomePage
