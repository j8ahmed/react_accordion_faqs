import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const Example8 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState('Default user');

    useEffect(() => {
        fetch(url)
            .then((resp) => {
                if(resp.status >= 200 && resp.status <= 299){
                    return resp.json();
                } else{
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(resp.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, [])

    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <h1>Error...</h1>;
    //Default case
    return (
        <React.Fragment>
            <h2>Multiple Returns</h2>
            <h3>{user}</h3>
        </React.Fragment>
    );
}

export default Example8 
