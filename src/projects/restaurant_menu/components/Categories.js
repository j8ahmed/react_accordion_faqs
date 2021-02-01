import React, { useState, useEffect, useRef } from 'react';
import { loadMenu } from '../assests/animations';

const Categories = ({categories, current_category, changeCat}) => {
    const sortedCat = useState(categories.sort());
    const init = useRef(false);

    useEffect(() => {
        if(init.current) loadMenu();
    }, [current_category])
    
    useEffect(() => {
        init.current = true;
    }, [])

    return (
        <nav>
            <ul className="category_list">
                <li className="category_item" onClick={()=>{changeCat('')}}>All</li>

                {sortedCat[0].map((cat, i) => {
                    return (
                        <li 
                        key={i}
                        className="category_item"
                        onClick={()=>{changeCat(cat)}} >{cat}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Categories;
