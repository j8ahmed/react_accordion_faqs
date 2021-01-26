import React from 'react';

const Book = (props) => {
    const {title, cost} = props
    const alertClick = (message,e) => alert(message)
    return(
        <div>
        <h2>{title}</h2>
        <h3>{cost}</h3>
        <button type='button' onClick={()=> alert('You clicked the button!')}>Click me</button>
        <button type='button' onClick={(e) => { alertClick("Help Me Please",e) }}>Another Button</button>
        </div>
    );
}

export default Book;


