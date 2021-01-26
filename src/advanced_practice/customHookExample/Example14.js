import React from 'react'
import { useFetch } from './useFetch';
const url = 'https://api.github.com/users';
//Custom Hook

const Example14 = () => {
    const {loading, users} = useFetch(url);
    console.log(users);
    return (
        <React.Fragment>
            <h2>{loading ? 'Loading...' : 'Fetch successful'}</h2>
        </React.Fragment>
    )
}

export default Example14;
