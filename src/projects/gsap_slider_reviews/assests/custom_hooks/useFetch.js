import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
    const [ fetchObj, setFetchObj] = useState({loading:true, users:[]})

    const getUsers = useCallback( async () => {
        const users = await fetch(url).then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json();
            }else{
                setFetchObj( (fetchObj) => {
                    return {...fetchObj, loading: false}
                });
                throw new Error(resp.statusText);
            }
        });
        setFetchObj( (fetchObj) => {
            return {...fetchObj, loading: false, users: users}
        });
    }, [url]);

    useEffect(() => {
        getUsers();
    }, [getUsers])


    const { loading, users } = fetchObj;
    return { loading, users };
};


