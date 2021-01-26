import React, {useState, useEffect} from 'react';

//useEffect cleanup function
const Example6 = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };
    useEffect(() => {
        console.log('Use Effect')
        window.addEventListener('resize', checkSize);
        return () => {
            console.log('Clean up')
            window.removeEventListener('resize', checkSize);
        };
    });

    console.log('Render Component')
    return (
        <React.Fragment>
            <h3>UseEffect Cleanup Function Example</h3>
            <h4>Window Size</h4>
            <h4>{size}</h4>
        </React.Fragment>
    )
}

export default Example6
