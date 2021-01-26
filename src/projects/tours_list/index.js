import React, { useState, useEffect, useReducer, useCallback } from 'react';
import './css/index.css';
import Tours from './components/Tours';
import Loading from './components/Loading';
import { reducer } from './reducer';
import { tours_data } from './assests/tours_data';
import { gsap } from 'gsap';
// const url = 'https://course-api.netlify.app/api/react-tours-project';

const defaultState = {
    loading: false,
    no_items: false,
    tours: tours_data
};


const Index = () => {
    const [ state, dispatch ] = useReducer(reducer, defaultState);
    const [ toursList, setToursList ] = useState({ tours: state.tours});

    const reloadTours = () => {
        gsap.timeline()
        .to('.refresh_btn', {x:'100vw', ease:'back'})
        .eventCallback('onComplete', () => {
            dispatch({
                type: 'RELOAD TOURS',
                payload: { tours: tours_data, no_items: false }
            });
        });
        setToursList({tours: tours_data});
    };

    //Handles removal of Tour item calls without skipping
    const deleteTourItem = useCallback( (e, id) =>{
        const elem = e.target.parentNode;

        const filterToursList = (toursList) =>{
            const { tours } = toursList;

                const newToursList = tours.filter( (tour) => {
                    return id !== tour.id;
                });
                
                return({
                    tours: newToursList
                });
        };

        gsap.timeline()
        .to(elem, {opacity: 0, duration: 0.2, ease:'none'})
        .to(elem, {x:'50vw', duration: 0.5}, '<')
        .to(elem, {height: 0, margin: 0, padding: 0}, '<0.2')
        .add( () => {
            setToursList( (toursList) => {
                return filterToursList(toursList);
            })
        }, "+=1");

    }, []);

    useEffect( () => {
        dispatch({
            type:'UPDATE TOURS LIST',
            payload: { tours: toursList.tours }
        });
    }, [toursList.tours]);

    //Handles refresh button addition with all tour items removed
    useEffect(() => {
        // console.log(state.tours)
        if(state.tours.length <= 0){
            dispatch({
                type: 'NO ITEMS',
                payload: {no_items: true}
            });
        }
    }, [state.tours]);


    const { loading, no_items, tours } = state;
    if( loading ){
        return (
            <main className='app_container'>
                <Loading />
            </main>
        );
    }else{
        return (
            <main className='app_container'>
                <Tours 
                tours={tours} 
                no_items={no_items} 
                deleteTourItem={deleteTourItem} 
                reloadTours={reloadTours}/>
            </main>
        );
    }
}

export default Index
