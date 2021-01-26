import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';
import Person from './pages/Person';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Error from './pages/Error';
const Index = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/about'>
                    <About/>
                </Route>
                <Route exact path='/portfolio'>
                    <Portfolio/>
                </Route>
                <Route exact path='/people'>
                    <People/>
                </Route>
                <Route path='/person/:id' children={<Person/>}></Route>
                <Route exact path='/contact'>
                    <Contact/>
                </Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
        </Router>
    ) 
}

export default Index
