import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/HomePage'
import About from '../pages/AboutPage'
import Portfolio from '../pages/PortfolioPage'
import Project from '../pages/ProjectPage'
// import Blog from '../pages/BlogPage'
// import BlogPost from '../pages/BlogPostPage'
import Contact from '../pages/ContactPage'
import Error from '../pages/ErrorPage'

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
                {/* <Route exact path="/blog">
                    <Blog/>
                </Route>
                <Route exact path="/blog/post:id">
                    <BlogPost/>
                </Route> */}
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
