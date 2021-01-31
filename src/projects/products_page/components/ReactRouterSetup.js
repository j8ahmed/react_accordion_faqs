import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProductPage from '../pages/ProductPage'
import ErrorPage from '../pages/ErrorPage'
import Header from './Header'

const ReactRouterSetup = () => {
    return (
        <Router>

            <Header />

            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route path="/about">
                    <AboutPage/>
                </Route>

                <Route path="/product:id" children={
                    <ProductPage/>
                } />

                <Route path="*">
                    <ErrorPage/>
                </Route>

            </Switch>
        </Router>
    )
}

export default ReactRouterSetup
