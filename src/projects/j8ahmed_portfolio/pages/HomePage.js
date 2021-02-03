import "../css/home.css"
import React, {useEffect} from 'react'
import profile_pic from '../assets/images/square_profile_pic.jpeg'
import { Link } from 'react-router-dom'
import { load_page_anim } from '../assets/animations'

const Home_page = () => {

    useEffect(() => {
        load_page_anim()
    }, [])
    
    return (
        <main className="site_content_container">
            <section className="home_page_container">
                <div className="home_page_hero_container">
                    <div className="hero_text_container">
                        <div className="hero_text_intro_container">
                            <p className="hero_text_main_info">
                                Hi,<br/>
                                I'm <span className="site_accent_text">Jamal</span>.<br/>
                                A Full Stack Web Developer.
                            </p>
                        </div>
                    </div>
                    <div className="hero_image_container">
                        <img src={profile_pic} alt="Jamal 'J8' Ahmed"/>
                    </div>
                </div>
                <div className="hero_details_container">
                <p className="hero_text_sub_info">I work primarily with&nbsp;
                    <span className="text_sub_info_accent"><a href="https://reactjs.org/" target="_blank">React</a></span>,&nbsp;
                    <span className="text_sub_info_accent"><a href="https://reactnative.dev/" target="_blank">React Native</a></span>,&nbsp;
                    <span className="text_sub_info_accent"><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a></span>, and&nbsp;
                    <span className="text_sub_info_accent"><a href="https://nodejs.org/en/" target="_blank">Node.js</a></span>.
                </p>
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
