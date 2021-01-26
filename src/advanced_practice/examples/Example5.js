import React, {useState, useEffect}from 'react'

const Example5 = () => {
    const [value, setValue] = useState(0);
    useEffect(()=>{
        console.log("Called useEffect");
        document.title = `New Messages(${value})`;
    });
    const style = {
        fontWeight: 'bold',
        fontSize: '2rem',
        backgroundColor: 'rgb(220,220,220)',
    };
    console.log("component is getting rendered.")
    return (
        <React.Fragment>
            <h2>Message Notifications</h2>
            <h3 style={style}>{value}</h3>
            <div>
                <h4>Delayed buttons</h4>
                <button style={style} onClick={() => {
                    setValue(value - 1);
                }}>-</button>
                <button style={style} onClick={() => {
                    setValue(0);
                }}>reset</button>
                <button style={style} onClick={() => {
                    setValue(value + 1);
                }}>+</button>
            </div>
        </React.Fragment>
    )
}

export default Example5
