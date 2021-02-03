import "../css/about.css"
import React, { useState, useEffect, useCallback } from 'react'
import Index from '../components/about'
import Values from '../components/about/Values'
import SoftSkills from '../components/about/SoftSkills'
import TechSkills from '../components/about/TechSkills'
// import { useGlobalContext } from '../components/AppProvider'
// const {log} = console

const About_page = () => {
    const [ section, setSection] = useState("")
    // const { isLoading, load_page } = useGlobalContext()

    const change_section = useCallback( (section) => {
        setSection(section)
    } )

    switch(section){

        case "values":
            return <Values  change_section={change_section}/>

        case "tech_skills":
            return <TechSkills  change_section={change_section}/>

        case "soft_skills":
            return <SoftSkills  change_section={change_section}/>

        default:
            return <Index change_section={change_section}/>
    }
}

export default About_page