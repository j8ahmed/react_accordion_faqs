import React, { useEffect } from 'react'
import { load_page_anim } from '../../assets/animations'

const Index = ({change_section}) => {

    useEffect(() => {
        load_page_anim()
    }, [])
    
    return (
        <main className="site_content_container">
            <h2 className="about_section_heading">Jamal <span className="site_accent_text">'J8'</span> in a Nutshell</h2>
            <p className="site_paragraph">
            I'm a team player, a self-starter, a learner, and a goal-focused worker. I combine my soft skills with my technical experience to provide clients with purposeful software solutions that provide high value to their businesses.</p>
            <p className="site_paragraph">I love coding but beyond anything else I enjoy solving problems. </p>
            <div className="about_section_btns_container">
                <button className="section_btn" onClick={()=> change_section("values")}>Key Values</button>
                <button className="section_btn" onClick={()=> change_section("tech_skills")}>Tech Skills</button>
                <button className="section_btn" onClick={()=> change_section("soft_skills")}>Soft Skills</button>
            </div>
        </main>
    )
}

export default Index
