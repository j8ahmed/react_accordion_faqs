import React from 'react';

const Modal = ({modalContent, closeModal}) => {
    return (
        <div style={{color:'red', cursor: 'pointer'}} onClick={closeModal}>
            <h2>{modalContent}</h2>
        </div>
    )
}

export default Modal;
