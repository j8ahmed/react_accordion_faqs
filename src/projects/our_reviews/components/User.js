import React, { useEffect } from 'react';
import gsap from 'gsap';
import { loadUser } from '../assests/animations';
const User = ({id, userIndex, image, name, profile, bio, numUsers, changeUser}) => {

    useEffect(() => {
        loadUser(gsap.timeline());
    }, [id])

    const hide = {opacity:0}
    return (
        <React.Fragment>
             <div id={`user_${id}`}className='review_item' style={hide}>
                <div className='review_img_cont' style={hide}>
                    <img src={image} alt={name}/>
                    <div className='svg_container'>
                        <svg stroke="currentColor" fill="white" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                    </div>
                </div>
                <div className="review_text_cont" style={hide}>
                    <h3 className='user_name'>{name}</h3>
                    <h4 className='profile_link'><a href={profile}><i className="fab fa-github"></i></a></h4>

                    <p>{bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus assumenda quam sequi, dolore fugiat quisquam inventore tempora ullam sint!'}</p>
                </div>
                <div className='review_btn_cont'>
                    <div>
                        <button className='btn arrow_btn' onClick={() => {
                            const val = userIndex - 1 < 0 ? numUsers - 1 : -1;
                            changeUser( val );
                        }}><i className="fas fa-chevron-left"></i></button>
                        <button className='btn' onClick={() => {
                            changeUser( Math.floor(Math.random()*numUsers) )
                        }}>Surprise</button>
                        <button className='btn arrow_btn' onClick={() => {
                            const val = userIndex + 1 >= numUsers ? 0 : 1;
                            changeUser( val );
                        }}><i className="fas fa-chevron-right"></i></button>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default User;
