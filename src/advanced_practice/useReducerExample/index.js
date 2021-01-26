import React, {useState, useReducer} from 'react';
import Modal from './Modal';
import {data} from '../data';
//Reducer setup
import {reducer} from './reducer';
const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: 'Modal',
};

const Index = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            dispatch({type:"TESTING", payload: {id: new Date().getTime().toString(), name}});
            setName('');
        }else{
            dispatch({type:"NO_VALUE"});
        }
    };

    const closeModal = () => {
        dispatch({type: 'CLOSE_MODAL'});
    };
    return (
        <React.Fragment>
            <h1>useReducer Example:</h1>
            {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <button type="submit">Add Person</button>
                </div>  
            </form>
            <div id="peopleList">
                <ul style={{paddingLeft: 0, textAlign:'left', listStyle:'none'}}>
                    {state.people.map((person, i) => {
                        const {id, name} = person;
                        return (
                            <li key={id} style={{marginLeft:0, paddingLeft:0}}>
                                <h4>Player {i+1}: {name}</h4>
                                <button onClick={() => {
                                    dispatch({type: 'REMOVE_PERSON', payload: id})
                                }}>Remove</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </React.Fragment>   
    )
}

export default Index
