import React, { useState, useEffect, useCallback } from 'react';
import User from './components/User';
import { gsap } from 'gsap';
import { loadApp } from './assests/animations';
import { users_data } from './assests/dataset';
import './css/index.css';
// const url = 'https://api.github.com/users';
// const my_url = 'https://api.github.com/users/J8ahmed';

const Index = () => {
    const [ loading ] = useState(false);
    const [ users ] = useState(users_data);
    const [ userIndex, setUserIndex ] = useState(0)

    const changeUser = useCallback( (num) => {
        if (Math.abs(num) === 1){
            setUserIndex((userIndex) => {
                return userIndex + num
            })
        }else{
            setUserIndex(num)
        }
        
    }, []);

    useEffect(() => {
        loadApp(gsap.timeline());
    }, []);

    if(loading){
        return (
        <React.Fragment>
            <div className='app_title'>
                <h1>Our Reviews</h1>
                <div className='underline'></div>
            </div>
            <main className='app_container'>
                <h2>Loading...</h2>
            </main>
        </React.Fragment>
        )
    }else {
        const hide = {opacity: 0};
        const { id, login, avatar_url, html_url, bio } = users[userIndex];
        return (
        <React.Fragment>
            <div className='app_title'>
                <h1 style={hide}>Our Reviews</h1>
                <div className='underline' style={hide}></div>
            </div>
            <main className='app_container' style={hide}>
                <User 
                id={id}
                userIndex={userIndex}
                name={login}
                image={avatar_url}
                profile={html_url}
                bio={bio}
                numUsers={users.length} 
                changeUser={changeUser}/>

            </main>
        </React.Fragment>
        );
    }

    
 
}

export default Index;

