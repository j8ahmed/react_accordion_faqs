import React, {useState, useEffect} from 'react';

const url = 'https://api.github.com/users';

//Fetch and display users from Github using useEffect - React Hook
const Example7 = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <React.Fragment>
            <h2>Fetch Data</h2>
            <ul style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', margin:0, padding:0}}>
                {users.map( (user) => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                        <li key={id} style={{listStyle: 'none', margin: '0.5rem'}}>
                            <img src={avatar_url} alt={login} style={{maxWidth: '5rem', borderRadius: '2.5rem'}}/>
                            <div>
                                <h3>{login}</h3>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    )
}

export default Example7;
