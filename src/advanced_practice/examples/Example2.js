import React from 'react';
import {data} from '../data.js';

const Example2 = () => {
    const [people, setPeople] = React.useState(data)
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return(
        <React.Fragment>
            {people.map( (person) => {
                const {id, name} = person;
                return(
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => {
                            removeItem(id);
                        }}
                        >remove item</button>
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default Example2;