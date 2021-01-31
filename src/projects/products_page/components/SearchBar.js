import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../components/AppProvider'

const SearchBar = () => {
    const { handle_search } = useGlobalContext()
    const search = useRef(null)

    useEffect(() => {
        //delay focus until after the load animation of page is complete
        //otherwise the focus will not work.
        let to = setTimeout(()=> {
            search.current.focus()
        }, 500)

        return () => clearTimeout(to)
    }, [search])

    return (
        <div className="search_bar_container">
            <form className="search_bar_form" onSubmit={(e) => {
                e.preventDefault()
                handle_search(search.current.value)
            }}>
                <div className="search_bar_form_elem_container">
                    <label htmlFor="search" className="search_label">Search for your favorite Products:</label>
                    <input ref={search} tabIndex="1" name="search" type="search" placeholder="Nike Air Force 1" className="search_bar_input" onChange={ (e) => handle_search(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
