import './css/index.css';
import React, { useState, useEffect, useMemo } from 'react';
import Categories from './components/Categories';
import MenuItem from './components/MenuItem';
import { loadApp } from './assests/animations';
import { dataset } from './assests/dataset';

const Index = () => {
    const [ category, setCategory ] = useState('');

    const catList = useMemo( () => {
        let list = dataset.map( (item) => {
            return item.category;
        }).sort();

        return [...new Set(list)]
    }, []);

    const catItems = useMemo( () => {
        if(category === ''){
            return dataset;
        } else{
            return dataset.filter( (item) => {
                return item.category === category;
            });
        }
    }, [category])

    useEffect(() => {
        loadApp();
    }, [])

    return (
        <React.Fragment>
            <div className='app_title'>
                <h1>Our Menu</h1>
                <div className='underline'></div>
            </div>
            <main className='app_container'>
                <Categories 
                categories={catList} 
                focusCat={category}
                changeCat={setCategory} />
                <div className='menu'>
                    {catItems.map((item) => {
                        return (
                            <MenuItem 
                            key={item.id}
                            {...item}/>
                        )
                    })}
                </div>
            </main>
        </React.Fragment>
    )
}

export default Index;



