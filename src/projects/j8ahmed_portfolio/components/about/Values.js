import React, { useEffect, useMemo } from 'react'
import { load_page_anim } from '../../assets/animations'

const Values = ({change_section}) => {
    const values_list = useMemo( () => [
        {
            id: 1,
            name: 'Be Clean',
            image: "",
            description: "Purposeful, clear, and intuitive designs.",
        },
        {
            id: 2,
            name: 'Be Flexible',
            image: "",
            description: "Open and ready to change to improve outcomes.",
        },
        {
            id: 3,
            name: 'Be Teachable',
            image: "",
            description: `Actively learning and asking:
            'Why' and 'How'.`,
        },
        {
            id: 4,
            name: 'be Dynamic',
            image: "",
            description: "Keep experimeneting.",
        },

    ], [])

    useEffect(() => {
        load_page_anim()
    }, [])
    
    return (
        <main className="site_content_container">
            <h2 className="about_section_heading">4 Key Professional Values</h2>
            <div className="about_section_values_list_container">
                <ul className="about_section_values_list">
                    {values_list.map( (value_item) => {
                        const { id, name, image, description } = value_item
                        return (
                            <li key={id} className="about_section_value_item">
                                <div className="about_section_value_item_image_container">
                                    {/* <img src={image} alt={name}/> */}
                                </div>
                                <div className="about_section_value_item_text_container">
                                    <h3 className="value_item_subheading">{name}</h3>
                                    <p className="value_item_description">{description}</p>
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

export default Values
