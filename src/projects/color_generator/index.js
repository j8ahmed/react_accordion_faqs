import "./css/index.css"
import React, { useState, useEffect, useRef } from 'react'
import Value from './components/Value'
import { loadApp, loadColors } from './assests/animations';
import Values from 'values.js'
const { log } = console

const Index = () => {
    const init = useRef(false);
    const [ color, setColor ] = useState("");
    const [ error, setError ] = useState(false);
    const [ list, setList ] = useState(new Values("#0089ff").all(10))

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            const colors = new Values(color).all(10)
            // log(colors)
            setList(colors)

        } catch (error){
            setError(true)
            log(error)
        }
    };
    
    useEffect(() => {
        if(init.current) loadColors();
    }, [list])
    
    useEffect(() => {
        loadApp();
        init.current = true;
    }, [])


    return (
        <React.Fragment>
        <div className='app_title'>
            <div className='underline'></div>
            <h1>Color Generator</h1>
        </div>

        <main className="app_container">
            <form onSubmit={handleSubmit}>
                <div className="form_item">
                    <label className="input_label" htmlFor="amount">Choose Color:</label>
                    <div>
                    <input 
                    type="text" 
                    name="amount" 
                    placeholder="#00ee4f"
                    id="amount" 
                    className={ error ? "amount_input error_input" : "amount_input"}
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} />
                    <button type="submit" className="submit_btn">Generate</button>
                    </div>
                </div>
            </form>
            <div className="value_cont">
                {list.map((value, i) => {

                    return(
                        <Value 
                        key={i} 
                        index={i}
                        hex={value.hex}
                        {...value}
                        style={{backgroundColor:value}}
                        className="value_item" />
                    )
                })}
            </div>
        </main>
        </React.Fragment>
    )
}

export default Index
