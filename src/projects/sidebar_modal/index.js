import './css/index.css'
import React from 'react'
import { AppProvider } from './components/AppProvider'
import Home from './components/Home'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'

const Index = () => {
    
    return (
        <AppProvider>
            <Home />
            <Sidebar />
            <Modal />
        </AppProvider>
    )
}

export default Index
