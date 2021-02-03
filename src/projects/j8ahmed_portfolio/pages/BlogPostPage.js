import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const {log} = console

const Blog_post_page = () => {
    const { id } = useParams()
    const [ blog, setBlog ] = useState(null)

    const fetch_blog_posts = async () => {
        const data = await fetch("https://j8ahmed.com/wp-json/wp/v2/posts").then(resp => {
            
            log(resp)
        
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json()
            } else {
                throw new Error(resp.statusText)
            }
        })
        
        setBlog(data)
    }

    useEffect(() => {
        log("fetching data")
        log(fetch_blog_posts())
    }, [])

    useEffect(() => {
       log(blog)
    }, [blog])

    return (
        <main className="site_content_container">
            <h1>Blog page</h1>
            <h2>Blog Post ID: {id}</h2>
            {blog ? 
            <div className="blog_post_content_container" 
                dangerouslySetInnerHTML={{__html: blog[0].content.rendered}} />
                 : null}
        </main>
    )
}

export default Blog_post_page
