import React, { useRef, useEffect } from 'react'
const {log} = console

const Portfolio_navigation = ({category_list, get_filtered_projects}) => {
    const search = useRef(null)
    
    useEffect(() => {
        log("These guys are actually bugging")
    }, [])


    return (
        <div className="portfolio_navigation_container">

            <div className="portfolio_navigation_search_container">
                <form className="search_bar_form" 
                onSubmit={(e) => {
                    e.preventDefault()
                    get_filtered_projects(search.current.value)
                }}
                >
                    <div className="search_bar_form_elem_container">
                        <label htmlFor="search" className="search_label">Search for specific projects:</label>
                        <input ref={search} tabIndex="1" name="search" type="search" placeholder="React I Phone Calculator" className="search_bar_input" 
                        onChange={ (e) => get_filtered_projects(e.target.value)}
                        />
                    </div>
                </form>
            </div>

            <div className="portfolio_navigation_categories_container">
                <nav className="portfolio_navigation_categories">
                    <ul className="portfolio_navigation_categories_list">
                        <li className="portfolio_category_item"
                        onClick={()=>{get_filtered_projects('')}}
                        >All</li>

                        {category_list.map((category, i) => {
                            return (
                                <li 
                                key={i}
                                className="portfolio_category_item"
                                onClick={()=>{search(category)}} 
                                >{category}</li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Portfolio_navigation

