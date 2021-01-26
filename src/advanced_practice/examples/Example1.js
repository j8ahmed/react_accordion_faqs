import React, {useState} from 'react';

const Example1 = () => {
    const [title, setTitle] = useState('Practicing React')
    
    const handleClick = () =>{
        setTitle("Changing Titles");
        console.log(title);
    }
    return(
        <React.Fragment>
            <h2>{title}</h2>
            <button onClick={handleClick}>Click Me</button>
        </React.Fragment>
    );
}

export default Example1;