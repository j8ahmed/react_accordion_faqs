import React from 'react'

const Example4 = () => {
    const [value, setValue] = React.useState(0);

    const complexUpdate = (step) => {
        setTimeout( () => {
            setValue((prevValue) => {
                return prevValue + step;
            });
        }, 2000)
    };
    const style = {
        fontWeight: 'bold',
        fontSize: '2rem',
        backgroundColor: 'rgb(220,220,220)',
    };
    return (
        <React.Fragment>
            <h2>More Complicated Counter</h2>
            <h3 style={style}>{value}</h3>
            <div>
                <h4>Delayed buttons</h4>
                <button style={style} onClick={() => {
                    complexUpdate(-1);
                }}>-</button>
                <button style={style} onClick={() => {
                    setValue(0);
                }}>reset</button>
                <button style={style} onClick={() => {
                    complexUpdate(1);
                }}>+</button>
            </div>
        </React.Fragment>
    )
}

export default Example4
