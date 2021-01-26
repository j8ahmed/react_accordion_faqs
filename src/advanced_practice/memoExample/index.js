import React, { useState, useCallback, useMemo } from 'react'
import Counter from './Counter';
import User from './User';
import { useFetch } from '../customHookExample/useFetch';
const url = 'https://api.github.com/users';

const Index = () => {
    const [count, setCount] = useState(0);
    const [moderators, setModerators] = useState(0);
    const { users } = useFetch(url);

    const addModerator = useCallback(() => {
        setModerators( (moderators) => moderators + 1 );
    }, []);

    const calcNumSiteAdmins = (users) => {
        console.log('Calculation ran');
        return (
            users.reduce( (total, item) => {
                return item.site_admin ? total++ : total;
            }, 0)
        );
    }

    const numSiteAdmins = useMemo( () => {
        calcNumSiteAdmins(users);
    }, [users]);
    return (
        <div>
            <h1>React Memo Example</h1>
            <Counter count={count} setCount={setCount}/>
            <h2>Moderator Count: {moderators}</h2>
            <h2>Site Admin Count: {numSiteAdmins}</h2>
            <div style={{maxWidth:'700px', display:'flex', flexWrap:'wrap', justifyContent:'center', margin:'auto'}}>
                {users.map((user) => {
                    return(
                            <User key={user.id} {...user} addModerator={addModerator}/>
                    );
                })}
            </div>
        </div>
    )
}

export default Index;
