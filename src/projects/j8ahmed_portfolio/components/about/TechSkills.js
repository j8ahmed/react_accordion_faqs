import React, { useMemo, useEffect } from 'react'
import { load_page_anim } from '../../assets/animations'
const Tech_skills = ({change_section}) => {
    const technical_skills = useMemo( () => [
        {
            id: 1,
            category: "Front End Web Development",
            skills: [
                {
                    name: "React",
                    image: "",
                    value: 70,
                },
                {
                    name: "GreenSock Animation Platform",
                    image: "",
                    value: 70,
                },
                {
                    name: "Angular",
                    image: "",
                    value: 30,
                },
                {
                    name: "Vue.js",
                    image: "",
                    value: 40,
                },
                {
                    name: "HTML / CSS / JavaScript (ES8+)",
                    image: "",
                    value: 70,
                },

            ]
        },
        {
            id: 2,
            category: "Back End Web Development",
            skills: [
                {
                    name: "Ndoe.js",
                    image: "",
                    value: 70,
                },
                {
                    name: "Python",
                    image: "",
                    value: 70,
                },
                {
                    name: "PHP",
                    image: "",
                    value: 70,
                },
                {
                    name: "WordPress",
                    image: "",
                    value: 70,
                },
            ]
        },
        {
            id: 3,
            category: "Additional Skills",
            skills: [
                {
                    name: "Customer Service / Presenting",
                    image: "",
                    value: 70,
                },
                {
                    name: "Data Science",
                    image: "",
                    value: 50,
                },
                {
                    name: "Machine Learning / A.I.",
                    image: "",
                    value: 40,
                },
                {
                    name: "Photoshop / Illustrator",
                    image: "",
                    value: 50,
                },
                {
                    name: "Git / Linux",
                    image: "",
                    value: 60,
                },
            ]
        },
    ], [])

    useEffect(() => {
        load_page_anim()
    }, [])
    
    return (
        <main className="site_content_container">
            <h2 className="about_section_heading">Technical Skills</h2>

            <div className="technical_skills_container_list">
                <ul className="technical_skills_list">
                    {technical_skills.map( skill_category => {
                        const { id, category, skills } = skill_category
                        return (
                            <li key={id} className="technical_skills_category_item">
                                <h3 className="category_item_name">{category}</h3>
                                <div className="category_item_skills_container">
                                    <ul className="category_item_skills_list">
                                        {skills.map( (skill, i) => {
                                            const { name, image, value} = skill
                                            return (
                                                <li key={i} className="cateogry_item_skill_item">
                                                    <label htmlFor="">{name}</label>
                                                    <meter 
                                                    id={name} 
                                                    value={value}
                                                    min="0" 
                                                    max="100"
                                                    low="30"
                                                    high="70"
                                                    optimum="70"></meter>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        )
                    } )}
                </ul>
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

export default Tech_skills
