import './css/index.css'
import React, { useEffect } from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import { AppProvider } from './components/AppProvider'
import { load_app } from './assets/animations'

const Index = () => {

    useEffect(() => {
        load_app()
    }, [])
    return (
        <AppProvider>
            <Header />
            <Cart />
        </AppProvider>
    )
}

export default Index
