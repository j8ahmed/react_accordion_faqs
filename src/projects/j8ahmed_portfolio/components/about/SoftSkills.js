import React, { useEffect } from 'react'
import { load_page_anim } from '../../assets/animations'

const Soft_skills = ({change_section}) => {

    useEffect(() => {
        load_page_anim()    
    }, [])

    return (
        <main className="site_content_container">
            <h2 className="about_section_heading">Soft Skills</h2>

            <div className="soft_skills_info_container">
                <div className="soft_skills_img_container">
                    {/* <img src="" alt=""/> */}
                </div>
                <div className="soft_skills_text_container">
                    <p className="soft_skills_paragraph">I'm more than just a Software Developer. I'm a former teacher, Boys & Girls Club Leader, Sales Rep, and an avid sports fan.</p>
                    <p className="soft_skills_paragraph">As a result, I'm highly focused on customer service and providing a convenient experience for all my clients. I'm also known to tell a good joke every once in a while... ;)</p>
                    <p className="soft_skills_paragraph">I believe in value driven solutions and effective communication amongst team members. I pride myself on my ability to manage conflict and work as a member of a team. I believe that our most unhappy customers are our greatest source of learning.</p>
                </div>
            </div>

            <div className="about_section_btns_container">
                <button className="section_btn" onClick={()=> change_section("")}>Summary</button>
                <button className="section_btn" onClick={()=> change_section("values")}>Key Values</button>
                <button className="section_btn" onClick={()=> change_section("tech_skills")}>Tech Skills</button>
                <button className="section_btn" onClick={()=> change_section("soft_skills")}>Soft Skills</button>
            </div>
        </main>
    )
}

export default Soft_skills
