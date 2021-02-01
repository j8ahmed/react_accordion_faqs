import "../css/footer.css"
import React from 'react'

const Footer = () => {
    return (
        <footer className="site_footer">
            <div className="site_footer_container">
                <div className="site_footer_navbar">
                
                    <div className="footer_navbar_social_links_container">
                        <ul className="footer_navbar_social_links_list">
                            <li className="footer_navbar_social_link_item">
                                <a className="footer_navbar_social_link" href="https://twitter.com/j8ahmed">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="footer_navbar_social_link_item">
                                <a className="footer_navbar_social_link" href="https://www.linkedin.com/in/j8ahmed/">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li className="footer_navbar_social_link_item">
                                <a className="footer_navbar_social_link" href="https://codepen.io/j8ahmed">
                                    <i className="fab fa-codepen"></i>  
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
