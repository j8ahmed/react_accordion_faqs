import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { birthdays_data } from './assests/data';
import './css/index.css';

const Index = () => {
    const [birthdays, setBirthDays] = useState(birthdays_data);
    const birthdayList = useRef(null);

    useEffect(() => {
        gsap.timeline()
            .set('.app_container', {height:0, width:0})
            .fromTo('.app_container', {width: 0}, {width:'300px'})
            .fromTo('.app_container', {height: 0}, {height: '650px'}, "+=0.75")
            .from('.app_title', {opacity:0, y:'-200px'}, "+=0.5")
            .from('.birthday_item', {x:'-300px', opacity:0, stagger:0.1 })
            .from('.clear_btn', {opacity:0, y:'150px'})
            .timeScale(1.5);        
    }, [])
    
    const clearBirthdays = (() => {
        if (birthdayList.current.children.length > 0){
            gsap.timeline()
            .to('.birthday_item', {x:'-300px', opacity:0, stagger:{each:0.2,from:'end'} })
            .to('.app_container', {height:'200px', duration:0.1})
            .timeScale(1.5)
            .eventCallback('onComplete', ()=> setBirthDays([]));
        }
    });
    

    const numBirthdays = birthdays.length;
    return (
        <div className='app_container'>
            <h2 className='app_title'>{numBirthdays} birthdays today</h2>
            <ul className='birthday_list' ref={birthdayList}>
                {birthdays.map((birthday) => {
                    const { id, name, age } = birthday;
                    return (
                        <li key={id} className='birthday_item'>
                            <div className='profile_pic_cont'></div>
                            <div className='profile_text_cont'>
                                <h4>{name}</h4>
                                <p>{age} years old</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button className='clear_btn' onClick={clearBirthdays}>Clear All</button>                
        </div>
    )
}

export default Index;