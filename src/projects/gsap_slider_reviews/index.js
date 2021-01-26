import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import User from './components/User';
import { loadApp, loadNextSlide, loadPreviousSlide } from './assests/animations';
import { users_data } from './assests/dataset';
import './css/index.css';
// const url = 'https://api.github.com/users';
// const my_url = 'https://api.github.com/users/J8ahmed';

const Index = () => {
    const init = useRef(false)
    const [ loading ] = useState(false);
    const [ users ] = useState(users_data);
    const reviewContainer = useRef(null);
    const [ indexPositions, setIndexPositions ] = useState({
        previous: 0,
        current: 1,
        next: 2,
        change: 1,
        order: [0, 1, 2],
        labels: ['previous', 'current', 'next']
    })
    
    const numUsers = useMemo( () => {
        return users.length;
    }, [users]);

    const changeUser = useCallback( (num) => {
        
        setIndexPositions( (indexPositions) => {
            const { current } = indexPositions;
            const endIndex = numUsers - 1;
            //new current value with end / beginning of array loop conditions
            const newCurr = num === 1 ? 
                current === endIndex ? 0 : current + num :
                current === 0 ? endIndex : current + num ;
            
            const newPrev = current;
            const newNext = num === 1 ? 
                newCurr === endIndex ? 0 : newCurr + num :
                newCurr === 0 ? endIndex : newCurr + num ;

            return ({...indexPositions,
                previous: newPrev,
                current: newCurr, 
                next: newNext,
                change: num,
                order: [ newPrev, newCurr, newNext ]
            });
        });

    }, [numUsers]);


    useEffect(() => {
        const { previous, current, next, order, labels, change } = indexPositions;
        const reviews = reviewContainer.current.children;

        order.forEach((index, j) => {
            const id = `user_${index}`;

            if ( change > 0){
                reviews[id].attributes.class.value = `review_item ${labels[j]}`;
            }else{
                reviews[id].attributes.class.value = `review_item ${labels[j]}_reverse`;
            }
        });
        if(init.current && change === 1){
            loadNextSlide(reviews[previous], reviews[current], reviews[next])
        } else if (init.current && change === -1 ){
            loadPreviousSlide(reviews[previous], reviews[current], reviews[next])
        }
        let slider = setInterval(() => {
            if(change === 1) changeUser(1);
            else changeUser(-1);
        }, 3000, change);
        return () => clearInterval(slider);   

    }, [indexPositions, changeUser])

    useEffect(() => {
        loadApp()
        init.current = true
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
        return (
        <React.Fragment>
            <div className='app_title'>
                <h1>Our Reviews</h1>
                <div className='underline'></div>
            </div>
            <main className='app_container'>
                <button className='btn arrow_btn' onClick={() => changeUser(-1)}>
                    <i className="fas fa-chevron-left"></i>
                </button>

                <div className="reviews_cont" ref={reviewContainer}>
                {users.map( (user, i) => {
                    const { id, login, avatar_url, bio } = user;

                    let pos = "next";
                
                    return (
                        <User 
                        key={id}
                        id={i}
                        pos={pos}
                        name={login}
                        image={avatar_url}
                        bio={bio}
                        numUsers={users.length} />
                    );
                })}
                </div>

                <button className='btn arrow_btn' onClick={() => changeUser(1)}>
                    <i className="fas fa-chevron-right"></i>
                </button>     
            </main>
        </React.Fragment>
        );
    }

    
 
}

export default Index;

