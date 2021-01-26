import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
    const [fetchObj, setFetchObj] = useState({loading:true,users:[]});
    
    // Placed getUsers() inside the useCallback hook to keep it from looping infinitely.
    const getUsers = useCallback( async () => {
        const users = await fetch(url).then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json();
            } else {
                setFetchObj((fetchObj) => {
                    return {...fetchObj, loading: false}
                });
                throw new Error(resp.statusText)
            }
        });
        setFetchObj((fetchObj) => {
            return {...fetchObj, users: users, loading: false}
        });
    }, [url]);

    useEffect( () => {
        getUsers();
    }, [url, getUsers]);

    const { loading, users } = fetchObj;
    return { loading, users };
}
