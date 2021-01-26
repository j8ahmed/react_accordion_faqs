import React, {useState} from 'react';

const Example10 = () => {
    const [person, setPerson] = useState({firstName: '', email: '', age: ''});
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPerson({...person, [name]:value});
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const {firstName, email, age} = person;
        if (firstName && email && age){
            setPeople( (people) => {
                //use a proper unique ID generator package like uuid
                //for now we are cheating here.
                let id = new Date().getTime().toString();
                return [...people, {id, firstName, email, age}];
                }
            );
            setPerson({firstName: '', email: '', age: ''});
        } else console.log('Empty Values');
    };

    return (
        <React.Fragment>
            <article>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName">Name: </label>
                        <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={person.firstName}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input 
                        type="text" 
                        id="email" 
                        name="email"
                        value={person.email}
                        onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input 
                        type="number" 
                        id="age" 
                        name="age"
                        value={person.age}
                        onChange={handleChange}/>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Add Person</button>
                </form>
            </article>
            <h3>Persons List</h3>
            <ul>
            {people.map((person) => {
                const {id, firstName, email} = person;
                return(
                    <li key={id} style={{textAlign: 'left'}}>
                        <p>Name: {firstName}</p>
                        <p>Email: {email}</p>
                    </li>
                );
            })}
            </ul>
        </React.Fragment>
    )
}

export default Example10
