import "../css/portfolio.css"
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { data } from '../assets/page_data/portfolio/data'
import Navigation from '../components/portfolio/Portfolio_navigation'
import Project from '../components/portfolio/Portfolio_project'
import { load_page_anim } from '../assets/animations'
const {log} = console

const Portfolio_page = () => {
    const [projects, setProjects] = useState(data.projects)

    const category_list = useMemo( ()=> {
        let list = data.projects.map( (item) => {
            return item.category;
        }).flat().sort()

        return [...new Set(list)]
    }, [] )

    const filter_projects = useCallback( async (text, search_by_category=true) => {
        //fake fetch to imitate async fetch()
        const fake_fetch = () => {
            return new Promise( resolve => {
                setTimeout(()=>{
                    const { projects } = data
                    resolve(projects)
                }, 500)
            })
        }

        const regex = new RegExp( `(${text})`, "i")
        const unfiltered_projects = await fake_fetch()
        const filtered_projects = unfiltered_projects.filter( (project) => {
            let match = false
            
            if(search_by_category){
                //test category
                if( regex.test(project.category.join()) ) match = true
            } else {
                //test name
                if( regex.test(project.name) ) match = true
                //test category
                if( regex.test(project.category.join()) ) match = true
                //test description?? -> maybe in the future
                // if(regex.test(project.name)) match= true
            }
            
            return match ? project : null
        })

        setProjects( projects => filtered_projects)
    },[] )

    useEffect(() => {
        load_page_anim()
    }, [])

    return (
        <main className="site_content_container">
            <Navigation 
                category_list={category_list}
                get_filtered_projects={filter_projects}
            />
            <div className="portfolio_projects_list_container">
                <ul className="portfolio_projects_list">
                    {projects.map((project) => {
                        const { id } = project
                        return (
                            <Project key={id} {...project} />
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default Portfolio_page
