import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home_page'
import About from '../pages/About_page'
import Portfolio from '../pages/Portfolio_page'
import Project from '../pages/Project_page'
import Contact from '../pages/Contact_page'
import Error from '../pages/Error_page'

const ReactRouterSetup = () => {
    return (
        <Router>
            
            <Header />

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route exact path="/project:id">
                    <Project/>
                </Route>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>


            </Switch>

            <Footer />

        </Router>
    )
}

export default ReactRouterSetup
