import React from 'react'

const ExpList = ({tabs, expItem, changeExp}) => {

    return (
    <nav>
        <ul className="tab_list">
            {tabs.map( (tab,i) => {
                if(tab === expItem.name){
                    return (
                        <li 
                        key={i} 
                        className="tab_item current_tab"
                        onClick={()=>{changeExp(tab)}}
                        >{tab}</li>
                    )
                }else{
                    return (
                        <li 
                        key={i} 
                        className="tab_item"
                        onClick={()=>{changeExp(tab)}}
                        >{tab}</li>
                    );
                }
            })}
        </ul>
    </nav>
    )
}

export default ExpList
