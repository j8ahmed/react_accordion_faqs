import React, {useEffect, useRef} from 'react';
//useRef Example
const Example11 = () => {
    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
        console.log(divContainer.current);
    };
    useEffect(() => { refContainer.current.focus(); });

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                    <button type="submit">submit</button>
                </div>
            </form>
            <div ref={divContainer}>Hello World</div>
        </React.Fragment>
    )
}

export default Example11;
