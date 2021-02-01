import "../css/home.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Home_page = () => {
    return (
        <main className="site_content_container">
            <section className="home_page__hero_container">
                <div className="hero_image_container">

                </div>
                <div className="hero_text_container">
                    <div className="hero_text_intro_container">
                        <p>
                            Hi,<br/>
                            I'm <span className="site_accent_text">Jamal</span>.<br/>
                            I'm a Full-stack Developer.
                        </p>
                    </div>
                    <div className="hero_text_cta_btns_container">
                        <button className="hero_cta_btn">
                            <Link to="/portfolio">View my Portfolio</Link></button>
                        <button className="hero_cta_btn">
                            <Link to="/about">Read my Story</Link></button>
                        <button className="hero_cta_btn">
                            <Link to="/contact">Contact Me Today</Link></button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home_page
