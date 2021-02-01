import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio_project = ({ id, name, category }) => {
    return (
        <React.Fragment>
            <Link to={`/project${id}`}>
                <div className="project_img_container">
                    {/* <img src={image} alt={name}/> */}
                </div>
            </Link>
            <div className="project_info_container">
                <div className="project_card_header">
                    <div className="project_name_and_category_container">
                        <h2 className="project_card_name">{name}</h2>
                        <h3 className="project_card_category">{category}</h3>
                    </div>
                </div>
                <h4 className="project_page_link"><Link to={`/project${id}`}>Details</Link></h4>
            </div>
        </React.Fragment>
    )
}

export default Portfolio_project
