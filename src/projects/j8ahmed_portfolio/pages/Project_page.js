import React from 'react'
import { useParams } from 'react-router-dom'

const Project_page = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>THIS is the project page for Project: {id}</h1>
        </div>
    )
}

export default Project_page
