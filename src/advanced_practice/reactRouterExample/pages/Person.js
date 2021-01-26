import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../../../advanced_practice/data' ;
// import PropTypes from 'prop-types';

const Person = () => {
    const { id } = useParams();
    const [person, setPerson] = useState({name: 'Default name', salary: 'No salary', job: 'Unemployed'});
    
    useEffect(() => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setPerson(newPerson);
        console.log(newPerson);
    }, [id]);

    let style= {padding:'10px', margin:'1rem', maxWidth:'500px', background:'#ccc', borderRadius:'10px'};

    const { name, salary, job} = person;
    return (
        <React.Fragment>
            <div style={style}>
                <h4>{name || 'Default Name'}</h4>
                <p>{job || 'No job listed'}</p>
                <p>{salary || 0}</p>
                <Link to='/people'>Back to People</Link>
            </div>
        </React.Fragment>
    )
}

// Person.propTypes = {
//     name: PropTypes.string.isRequired,
//     salary: PropTypes.number.isRequired,
//     job: PropTypes.string.isRequired
// };

// Person.defaultProps = {
//     name: 'John Smith',
//     salary: 0,
//     job: 'unemployed'
// };

export default Person;
