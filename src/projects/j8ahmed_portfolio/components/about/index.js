import React from 'react'

const Index = () => {
    return (
        <main className="site_content_container">
            <h2 className="about_section_heading">Jamal <span className="site_accent_text">'J8'</span> in a Nutshell</h2>
            <p className="site_paragraph">
            I'm a team player, a self-starter, a learner, and a goal-focused worker. I combine my soft skills with my technical experience to provide clients with purposeful software solutions that provide high value to their businesses.</p>
            <p className="site_paragraph">I love coding but beyond anything else I enjoy solving problems. </p>
            <div className="about_section_btns_container">
                <button className="section_btn" onClick={}>View my Portfolio</button>
                <button className="section_btn" onClick={}>Read my Story</button>
                <button className="section_btn" onClick={}>Contact Me Today</button>
            </div>
        </main>
    )
}

export default Index
