import "./css/index.css"
import React from 'react'
import { AppProvider } from './components/AppProvider'
import ReactRouterSetup from './components/ReactRouterSetup'

const Index = () => {
    return (
        <AppProvider>
            <ReactRouterSetup />
        </AppProvider>
    )
}

export default Index
