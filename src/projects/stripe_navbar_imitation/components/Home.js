import React from 'react'
import { useGlobalContext } from './AppProvider'
import Header from './Header'
// const { log } = console

const Home = () => {
    const { setShowModal } = useGlobalContext()
    
    return (
        <React.Fragment>
            <Header />
             
            <main className="modal_section">
                <h1>Hello World</h1>
                <button className="modal_btn" onClick={()=>{
                    setShowModal( (showModal) => !showModal )
                }}>Modal</button>
            </main>
        </React.Fragment>
    )
}

export default Home
