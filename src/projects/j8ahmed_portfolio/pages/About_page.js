import "../css/about.css"
import React, { useState, useEffect } from 'react'
import Index from '../components/about'
import Values from '../components/about/Values'
import Soft_skills from '../components/about/Soft_skills'
import Tech_skills from '../components/about/Tech_skills'
import { useGlobalContext } from '../components/AppProvider'
const {log} = console

const About_page = () => {
    const [ section, setSection] = useState("")
    const { isLoading, load_page } = useGlobalContext()

    
    useEffect(() => {
        log(isLoading)
        
    }, [])

    useEffect(() => {
       let to = setTimeout( () => {
           load_page()
       }, 500)

       return ()=> clearTimeout(to)
    }, [])
    switch(section){

        case "values":
            return <Values />

        case "tech_skills":
            return <Tech_skills />

        case "soft_skills":
            return <Soft_skills />

        default:
            return <Index/>
    }
    return (
        <main className="">
            <h1>About Page</h1>
        </main>
    )
}

export default About_page