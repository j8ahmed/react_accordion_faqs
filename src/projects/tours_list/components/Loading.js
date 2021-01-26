import React, { useEffect, useRef } from 'react'
import '../css/loading.css';
import { gsap } from 'gsap';

const Loading = () => {
    const loading = useRef(null);
    const text = "Loading...".split("");

    useEffect(() => {
        gsap.timeline({repeat: -1,})
        .to('.load_letter', {y:-10, ease: 'sine.inOut', stagger:{each: 0.25}})
        .to('.load_letter', {y:10, ease: 'sine.inOut', stagger:{each: 0.25}})
        .to('.load_letter', {y:0, ease: 'sine.inOut', stagger:{each: 0.25}});
    }, []);

    return (
        <div ref={loading} className='load_cont'>
            {text.map((char, i) => {
                return(
                    <span className='load_letter' key={i}>{char}</span>
                )
            })}
        </div>
    )
}

export default Loading
