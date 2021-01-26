import React from 'react'

const Counter = ({count, setCount}) => {
    const style = {
        fontWeight: 'bold',
        fontSize: '1.5em',
        backgroundColor: 'rgb(220,220,220)',
    };

    return (
        <React.Fragment>
            <div>
                <h2>Counter: {count}</h2>
                <div>
                    <button style={style} onClick={() => {
                        setCount((count) => count -1);
                    }}>-</button>
                    <button style={style} onClick={() => {
                        setCount(0);
                    }}>reset</button>
                    <button style={style} onClick={() => {
                        setCount((count) => count +1);
                    }}>+</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Counter
