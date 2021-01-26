import React, {useState, useEffect} from 'react';
//Conditional rendering
const Example9 = () => {
    const [show, setShow] = useState(false)
    return (
        <React.Fragment>
            <button onClick={() => {setShow(!show)}}>Show/Hide</button>
            {show && <Item />}
        </React.Fragment>
    );
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    };  
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    }, [])
    return (
        <React.Fragment>
            <h2>Window Size</h2>
            <h3>Size: {size} px</h3>
        </React.Fragment>
    );
};


export default Example9
