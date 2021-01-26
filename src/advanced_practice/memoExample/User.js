import React from 'react'

const User = React.memo(({ login, avatar_url, addModerator }) => {

    return (
        <div style={{maxWidth:'150px', margin:'1rem', padding:'1rem', background:'#ddd'}}>
            <h2>{login}</h2>
            <img src={avatar_url} alt={login} style={{maxWidth:'100%'}}/>
            <button onClick={addModerator}>Add as Moderator</button>
        </div>
    )
})

export default User
