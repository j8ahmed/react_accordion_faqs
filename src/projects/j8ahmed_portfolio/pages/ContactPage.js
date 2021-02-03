import "../css/contact.css"
import React, {useEffect} from 'react'
import { load_page_anim } from '../assets/animations'

const Contact_page = () => {

    useEffect(() => {
        load_page_anim()
    }, [])
    
    return (
        <main className="site_content_container">
            <canvas id="rain-canvas"></canvas>
            <div id="contents">

                <div className="page-banner">
                    <div className="page-banner-icon"><i className="far fa-handshake"></i></div>
                    <h2 className="">Lets work together on something great</h2>
                </div>

                <div className="contact-split-container">

                    <div className="contact-link-container">
                        <address><a className="j8ahmed" href="mailto:j8ahmed@gmail.com"><div className="contact-link centered-heading"><i className="fas fa-envelope"></i></div></a></address>
                        <a className="linkedin" href="https://www.linkedin.com/in/j8ahmed/" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-linkedin-in"></i></div></a>
                        <a className="codepen" href="https://codepen.io/J8ahmed/" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-codepen"></i></div></a>
                        <a className="twitter" href="https://twitter.com/j8ahmed" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-twitter"></i></div></a>
                        <a className="instagram" href="https://www.instagram.com/j8_ahmed/" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-instagram"></i></div></a>
                        <a className="github" href="https://github.com/j8ahmed" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-github"></i></div></a>
                        <a className="youtube" href="https://www.youtube.com/channel/UCam3QW0KOgIbWtlfFz2z83w?view_as=subscriber" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-youtube"></i></div></a>
                    
                        <a className="freecodecamp" href="https://www.freecodecamp.org/j8ahmed" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-free-code-camp"></i></div></a>
                        <a className="hackerrank" href="https://www.hackerrank.com/j8ahmed" target="_blank" rel="noopener noreferrer"><div className="contact-link centered-heading"><i className="fab fa-hackerrank"></i></div></a>
                    </div>

                    
                
                </div>

            </div>
        </main>
    )
}

export default Contact_page
