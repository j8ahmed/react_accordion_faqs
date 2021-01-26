import React from 'react'
import { useGlobalContext } from './AppProvider'
import MenuButton from './MenuButton'
// const { log } = console

const Home = () => {
    const { showSidebar, setShowSidebar, setShowModal } = useGlobalContext()
    
    return (
        <React.Fragment>
            <nav className="nav_bar">
                <div className="nav_header">
                    <MenuButton 
                        isOpen={showSidebar}
                        toggleIsOpen={setShowSidebar} 
                    />
                </div>
            </nav>
             
            <main className="modal_section">
                <button className="modal_btn" onClick={()=>{
                    setShowModal( (showModal) => !showModal )
                }}>Modal</button>
            </main>
        </React.Fragment>
    )
}

export default Home
