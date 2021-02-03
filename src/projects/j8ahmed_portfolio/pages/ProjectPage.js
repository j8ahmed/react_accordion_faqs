import React from 'react'
import { useParams } from 'react-router-dom'

const Project_page = () => {
    const { id } = useParams()
    return (
        <main className="site_content_container">
            <h1>THIS is the project page for Project: {id}</h1>
        </main>
    )
}

export default Project_page
