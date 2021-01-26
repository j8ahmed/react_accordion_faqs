import './css/index.css'
import React, { useState, useEffect, useRef, useMemo} from 'react'
import { page_links, social_links } from './assests/data'
import MenuButton from './components/MenuButton'
import fire_logo from './assests/fire_logo.svg'
// const { log } = console

const Index = () => {
    const [ showPageLinks, setShowPageLinks ] = useState(false)
    const [ links ] = useState(page_links)
    const [ socialLinks ] = useState(social_links)
    const linksContainer = useRef(null)
    const linksList = useRef(null)
    
    const showLinks = useMemo( () => {
        return showPageLinks ? "show_links_cont" : ""
    }, [showPageLinks])

    useEffect(() => {
        if(showPageLinks){
            const linksHeight = linksList.current.getBoundingClientRect().height
            linksContainer.current.style.height = `${linksHeight}px`;
        } else {
            linksContainer.current.style.height = '0px';
        }
    }, [showPageLinks])

    return (
        <React.Fragment>
            <nav className="nav_bar">
                <div className="content_cont">
                <div className="nav_header">
                    <div className="logo_cont">
                        <img src={fire_logo} alt=""/>
                    </div>
                    <MenuButton 
                    menuOpen={showPageLinks} 
                    setShowPageLinks={setShowPageLinks} />
                </div>
            
                <div 
                className={`links_cont ${showLinks}`} 
                ref={linksContainer} >
                    <ul className="link_list" ref={linksList}>
                        {links.map((link) => {
                            const {id, url, text} = link
                            return (
                                <li key={id} className="page_link">
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="social_links_cont">
                    <ul className="social_link_list">
                        {socialLinks.map((link) => {
                            const {id, url, text} = link
                            return (
                                <li key={id} className="social_link">
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            </nav>
        </React.Fragment>
    )
}

export default Index
