import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../data';

const People = () => {
    const [people] = useState(data);
    return (
        <div>
            <h2>People</h2>
            {people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id}style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'300px', margin:'auto'}}>
                        <h4>{name}</h4>
                        <Link to={`/person/${id}`}>View Profile</Link>
                    </div>
                );
            })}
        </div>
    )
}

export default People
