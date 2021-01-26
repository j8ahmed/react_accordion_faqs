import React, {useState} from 'react'

const Example3 = () => {
    const [name, setName] = useState('Jamal'); 
    const [age, setAge] = useState(78); 
    const [message, setMessage] = useState('Hello there young fella.'); 

    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h4>{message}</h4>
            <button onClick={() => {
                setMessage("I see you have changed the message");
                setName("Jeff");
                setAge('210');
            }}>Change message</button>
        </>
    )
}

export default Example3
