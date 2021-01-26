import React, { useEffect, useRef } from 'react'
import { loadInfo } from '../assests/animations';

const Info = ({expItem}) => {
    const {name, title, start_date, end_date, details} = expItem;
    const init = useRef(false);


    useEffect(() => {
        if(init.current) loadInfo();
    }, [expItem])

    useEffect(() => {
        init.current = true;
    }, [])


    return (
        <article className="info_cont">
            <h2 className="job_title">{title}</h2>
            <h3 className="info_name">{name}</h3>
            <h4 className="job_dates">{`${start_date} - ${end_date}`}</h4>
            <ul className="details_list">
                {details.map( (detail,i) => {
                    return (
                        <li 
                        key={i}
                        className="detail_item"
                        >{detail}</li>
                    );
                })}
            </ul>
        </article>
    )
}

export default Info
