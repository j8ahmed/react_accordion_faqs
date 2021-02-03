import React, { useState, useEffect, useCallback } from 'react'
const {log} = console

const Blog_page = () => {
    const [ state, setState ] = useState({isLoading: true, blog: {}})

    const fetch_blog_posts = useCallback(async () => {
        const data = await fetch("https://j8ahmed.com/wp-json/wp/v2/posts").then(resp => {
            
            log(resp)
        
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json()
            } else {
                throw new Error(resp.statusText)
            }
        })
        
        setState({ isLoading: false, blog: data })
    }, [])

    useEffect(() => {
        fetch_blog_posts()
    }, [])

    useEffect(() => {
        log(state.blog)
    }, [state])

    if(state.isLoading){
        return (
            <div>
                <h1>Content Loading</h1>
            </div>
        )
    } else {
        return (
            <main className="site_content_container">
                <h2>Blog</h2>
                <div className="blog_posts_list_container">
                    <ul className="blog_posts_list">
                        {state.blog.map( (post) => {
                            const { id, title, link, excerpt } = post 
                            return (
                                <li key={id} className="blog_post_item">
                                    <div className="blog_post_img_container">

                                    </div>
                                    <div className="blog_post_info_container">
                                        <h3 className="" dangerouslySetInnerHTML={{__html: title.rendered}} />
                                        <p className="" dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
                                        <a href={link}>Read more...</a>
                                    </div>
                                </li>
                            )
                        } )}
                    </ul>
                </div>
            </main>
        )
    }
}

export default Blog_page
