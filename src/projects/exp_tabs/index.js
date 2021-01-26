import './css/index.css';
import React, { useState, useEffect, useMemo } from 'react'
import ExpList from './components/ExpList';
import Info from './components/Info';
import { dataset } from './assests/dataset';
import { loadApp } from './assests/animations';

const Index = () => {
    const [ exp, setExp ] = useState(dataset[0].name);
    const [ tabs ] = useState(dataset.map( tab => tab.name )); 

    const expItem = useMemo( () => {
        return dataset.filter( (item) => item.name === exp )[0];
    }, [exp]);
    
    useEffect(() => {
        loadApp();
    }, []);

    return (
        <React.Fragment>
            <div className='app_title'>
                <h1>Experience</h1>
                <div className='underline'></div>
            </div>
            <main className="app_container">
                <ExpList 
                tabs={tabs} 
                expItem={expItem}
                changeExp={setExp}/>
                <Info expItem={expItem}/>
            </main>
        </React.Fragment>
    )
}

export default Index
