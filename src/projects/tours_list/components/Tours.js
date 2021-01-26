import React, { useEffect } from 'react';
import TourItem from './TourItem';
import { gsap }  from 'gsap';
import { loadTitle, loadTourItems, loadRefreshButton } from '../assests/animations';
// const url = 'https://course-api.netlify.app/api/react-tours-project';

const Tours = ({ tours, deleteTourItem, no_items, reloadTours }) => {

    useEffect(() => {
        if (!no_items){
            loadTitle(gsap.timeline());
        }
    }, [no_items]);

    useEffect(() => {
        if(no_items){
            loadRefreshButton(gsap.timeline());
        }else {
            loadTourItems(gsap.timeline());
        }
        
    }, [no_items]);

    const hide = {opacity: 0};

    return (
        <React.Fragment>
            <div className='app_title'>
                <h1 style={hide} >Our Tours</h1>
                <div className='underline' style={hide}></div>
            </div>
            <ul className='tour_list'>
                {tours.map((tour)=>{
                    return(
                        <TourItem 
                        key={tour.id}
                        deleteTourItem={deleteTourItem}
                        {...tour} /> 
                    );
                })}
            </ul>
            {no_items && <button className='refresh_btn' onClick={reloadTours}
            style={hide}>Reload Tours</button>}
        </React.Fragment>
    )
}

export default Tours
