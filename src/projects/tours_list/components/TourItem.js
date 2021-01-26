import React, { useState, useEffect } from 'react'
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const TourItem = ({id, title, image, details, price, deleteTourItem}) => {

    const [ readMore, setReadMore ] = useState(false);
    const [ formPrice ] = useState(formatter.format(price));

    const changeReadMore = ()=>{
        setReadMore( (readMore) => !readMore );
    }

    useEffect(() => {
        
        
    }, []);

    const hide = {opacity: 0};

    return (
        <li className='tour_item' style={hide}>
            <div className='tour_img_cont'>
                <img src={image} alt='' />
            </div>
            <div className='tour_text_cont'>
                <div className='tour_header'>
                    <h4>{title}</h4> 
                    <h4 className='tour_price'>{formPrice}</h4>
                </div>
                <p>{readMore ? details : `${details.substring(0,100)}..`} <span className='read_more_btn' onClick={changeReadMore}>{readMore?'Show Less':'Read More'}</span></p>
            </div>
           <button className='delete_btn' onClick={(e)=>{
               deleteTourItem(e, id);
           }}>Not interested</button>
        </li>
    )
}

export default TourItem
