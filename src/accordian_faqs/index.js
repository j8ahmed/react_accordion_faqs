import './css/index.css';
import React, { useState, useRef, useEffect } from 'react'
import Question from './components/Question';
import { faq_data } from './assests/dataset';
import { loadApp } from './assests/animations';
const hide = {opacity: 0};

const Index = () => {
    const [ FAQS ] = useState(faq_data);
    const app = useRef(null);
    const title = useRef(null);

useEffect(() => {
    loadApp(app.current, title.current);
}, [])

    return (
        <React.Fragment>
            <main className='app_container' ref={app} style={hide}>
                <div className='app_title'>
                    <h1 ref={title} style={hide}>Questions and Answers About Login</h1>
                    <div className='underline' style={hide}></div>
                </div>
                <ul className='questions_cont'>
                    {FAQS.map( (q) => {
                        const {id, question, answer} = q;
                        return (
                            <Question 
                            key={id}
                            id={id}
                            question={question}
                            answer={answer}/>
                        );
                    })}
                </ul>
            </main>
        </React.Fragment>
    )
}

export default Index
