import React from 'react'
import User from './User';
import { data } from '../data';

const Index = () => {
    return (
        <React.Fragment>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', maxWidth:'500px', margin:'auto'}}>
                {data.map((user) => {
                    return <User key={user.id} {...user}/>
                })}
            </div>
        </React.Fragment>
    )
}

export default Index
