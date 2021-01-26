import './css/index.css'
import React from 'react'
import { AppProvider } from './components/AppProvider'
import Home from './components/Home'
import Modal from './components/Modal'


const Index = () => {
    
    return (
        <AppProvider>
            <Home />
            <Modal />
        </AppProvider>
    )
}

export default Index
