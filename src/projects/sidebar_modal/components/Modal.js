import React from 'react'
import { useGlobalContext } from './AppProvider'
import MenuButton from './MenuButton'

const Modal = () => {
    const { showModal, setShowModal } = useGlobalContext()
    return (
        <article className={`${showModal && "show_modal"} modal`}>
            <div className="modal_cont">
                <div className="modal_header">
                    <MenuButton 
                        isOpen={showModal}
                        toggleIsOpen={setShowModal}
                    />
                </div>
                <h2>Modal Contents</h2>
            </div>
        </article>
    )
}

export default Modal
