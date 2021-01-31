import "../css/about.css"
import React, { useEffect } from 'react'
import { load_page } from '../assets/animations'

const AboutPage = () => {
    
    useEffect(() => {
        load_page()
    }, [])

    return (
        <main className="site_page_container">
            <h1>About Page</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit sapiente laborum doloremque quam est nostrum, rem labore saepe dolores?
                Placeat sint sunt ullam inventore non mollitia est aliquid hic at ipsa alias, voluptatem doloremque dolor error? Libero, quos dolores.
                Quasi culpa non sit eveniet vitae quisquam odio repellat vel, unde a, veritatis autem quas consequuntur maiores. Consequatur, tenetur nobis?
                Porro aut ab quos nemo voluptate repudiandae magni a quod eum quo temporibus omnis itaque labore facilis, deserunt dolorem doloribus.
                Vero cum distinctio laborum molestias. Ipsum hic saepe voluptatibus, odit vero, explicabo nostrum amet, quaerat officiis recusandae aliquam quod assumenda?</p>
            </div>
        </main>
    )
}

export default AboutPage
