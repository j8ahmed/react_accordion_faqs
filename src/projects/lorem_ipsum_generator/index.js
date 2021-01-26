import "./css/index.css";
import React, { useState, useEffect, useRef } from 'react';
import { data } from './assests/dataset';
import { loadApp, loadText } from './assests/animations';

const Index = () => {
    const init = useRef(false);
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);

        if(amount <= 1) amount = 1;
        if(amount > 8 ) amount = 8;
        setText( data.slice(0,amount) );
    };
    
    useEffect(() => {
        if(init.current) loadText();
    }, [text])
    
    useEffect(() => {
        loadApp();
        init.current = true;
    }, [])


    return (
        <React.Fragment>
        <div className='app_title'>
            <h1>Lorem Ipsum Generator</h1>
            <div className='underline'></div>
        </div>

        <main className="app_container">
            <form onSubmit={handleSubmit}>
                <div className="form_item">
                    <label className="input_label" htmlFor="amount">Paragraphs:</label>
                    <div>
                    <input 
                    type="number" 
                    name="amount" 
                    id="amount" 
                    className="amount_input"
                    value={count} 
                    onChange={(e) => setCount(e.target.value)} />
                    <button type="submit" className="submit_btn">Generate</button>
                    </div>
                </div>
            </form>
            <div className="text_cont">
                {text.map((article, i) => {
                    return(
                        <p key={i} className="text_item">{article}</p>
                    )
                })}
            </div>
        </main>
        </React.Fragment>
    )
}

export default Index
