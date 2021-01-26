import "./css/index.css"
import React, { useState, useEffect, useRef, useCallback} from 'react'
import GroceryItem from './components/GroceryItem'
import { loadApp, loadItems, toggleModal, deleteAnim } from './assests/animations'
// const { log } = console
const getLocalStorage = () => {
    const list = localStorage.getItem('list')
    if(list){
        return JSON.parse(list)
    }else return []
}

const Index = () => {
    const init = useRef(false)
    const [ isEditing, setIsEditing ] = useState({current:false, id:""})
    const [ list, setList ] = useState(getLocalStorage())
    const [ alert, setAlert ] = useState({alert: false, message: "", cssClass:""})
    const [ item, setItem ] = useState("")
    
    const showAlert = useCallback( (current=false, message, cssClass ) => {
        setAlert({current, message, cssClass})
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!item){
            showAlert(true, "Please enter an item", "warning_message")
            
        }else if(isEditing.current){
            const { id } = isEditing
            const newList = list.map( (listItem) => {
                return id === listItem.id ? {id, title: item} : listItem
            } )
            setList(newList)
            setItem("")
            setIsEditing({current: false, id: ""})
        } else{

            setList([...list, {id: new Date().getTime().toString(), title:item}])
            showAlert(true, `${item} was added`, "add_or_edit")
            setItem("")
        }
   
    };

    const deleteItems = (id, all=false) => {
        if(isEditing.current){
            setIsEditing({...isEditing, current: false})
            setItem("")
        }

        if (all) {
            const tl = deleteAnim()
            tl.add( () => {
                showAlert(true, "All Items Deleted", "delete_message")
                setList([])
            }, ">" )
        } 
        else {  
            let itemName = ""
            const newList = list.filter( (item) => {
                if( id === item.id ) itemName = item.title
                if(item.id !== id) return item
                return null
            })
            const tl = deleteAnim(`#item_${id}`)
            tl.add( () => {
                showAlert(true, `"${itemName}" was deleted`, "delete_message")
                setList(newList)
            }, ">" )
        }
    }

    
    const editItem = (id) => {
        setIsEditing({current:true, id: id})
        setItem( list.reduce((a,b) => a.id === id ? a : b ).title )
    }

    useEffect(() => {
        if(init.current) loadItems();
    }, [list])
    
    useEffect(() => {
        loadApp();
        init.current = true;
    }, [])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    useEffect(() => {
        if(alert.current){
            toggleModal();
            const timeout = setTimeout( () => {
                const tl = toggleModal(true);

                tl.add( () => {
                    setAlert({ ...alert, current: false, cssClass:"" })
                }, ">")
                
            }, 3000)

            return () => clearTimeout(timeout)
        }
    }, [alert])


    return (
        <React.Fragment>
        <div className='app_title'>
            <h1>Grocery Helper</h1>
            <div className='underline'></div>
        </div>

        <main className="app_container">
            <div className={`modal_cont ${alert.cssClass}`}>
                <h4>{alert.current && alert.message}</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_item">
                    <input 
                    type="text" 
                    name="grocery_item" 
                    placeholder="e.g. Carrots"
                    id="grocery_item" 
                    className={`item_input ${isEditing.current && 'editing_input'}`}
                    value={item} 
                    onChange={(e) => setItem(e.target.value)} />
                    <button type="submit" className={`submit_btn ${isEditing.current && 'editing'}`}>
                        {isEditing.current ? "Edit" : "Add"}</button>
                </div>
            </form>
            { list.length > 0 && 
            (
            <React.Fragment>
                <ul className="grocery_list">
                    {list.map((item) => {
                        const { id, title } = item
                        return(
                            <GroceryItem 
                            key={id} 
                            index={id}
                            name={title}
                            edit={editItem}
                            deleteItem={deleteItems}
                            />
                        )
                    })}
                </ul>
                <button className="delete_all_btn"
                onClick={() => {deleteItems("", true)}}>Delete All Items</button>
            </React.Fragment>
            )}
        </main>
        </React.Fragment>
    )
}

export default Index
