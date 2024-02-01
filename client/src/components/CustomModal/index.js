import Modal from '@mui/material/Modal';
import React, { useState, } from 'react';
import snacks, { arrayString } from "../../helpers/Imports/imageImports.js"
import anime from 'animejs';



const CustomModal = ({ selectedSnack, isOpen, setIsOpen }) => {
    
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const closeModal = () => {
        console.log("Fechou modal");
        setIsOpen(false);
    }

    const afterOpenModal = () => {
        anime({
            targets: '.minhaModal',
            translateY: [-100, 0],
            duration: 500,
            easing: 'easeInOutQuad',
        });
    }


    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Example Modal"
        >
            {selectedSnack && (
                <>
                    <h2>{`Snack ID: ${selectedSnack.id}`}</h2>
                    <button onClick={closeModal}>Close</button>
                    <div>
                        <img
                            src={selectedSnack.frente}
                            alt={`Imagem ${selectedSnack.id}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </>
            )}
        </Modal>
    );
};

export default CustomModal;


