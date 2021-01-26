import React, {useState, useContext} from 'react'
import {data} from '../data';
//useContext and the context API
const PersonContext = React.createContext();
//two components consumer & provider

const Example13 = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id)
        });
    };
    return (
        <PersonContext.Provider value={{removePerson, people}}>
            <h2>useContext example</h2>
            <List />
        </PersonContext.Provider>
    )
}

const List = ({people}) => {
    const mainData = useContext(PersonContext);
    return (
        <React.Fragment>
            <ul>
                {mainData.people.map((person) => <SinglePerson key={person.id} {...person}/>)}
            </ul>
        </React.Fragment>
    );
};

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext);
    return (
        <React.Fragment>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4>{name}</h4>
                <button onClick={() => removePerson(id)}>Remove</button>
            </div>
        </React.Fragment>
    )
};

export default Example13
