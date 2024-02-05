// import Modal from '@mui/material/Modal';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import renewIcon from "../../images/Renew.png"
import {
    snacks
} from "../../helpers/Imports/imageImports";

import "./style.scss";

const CustomModal = ({ selectedSnack, isOpen, setIsOpen }) => {
    const [imgVerso, setImgVerso] = useState(true);

    useEffect(() => {
        setImgVerso(true);
      }, [isOpen]);

    useEffect(() => {
       console.log('mudei o snack', selectedSnack)
      }, [selectedSnack]);


    const handleCancel = (event) => {
        event.stopPropagation();
        setIsOpen(false);
        console.log("fechando", isOpen);
    };

    const clickVerso = () => {
        setImgVerso(!imgVerso);
      };


        return (

            <Modal
                visible={isOpen}
                destroyOnClose={true}
                centered
                maskClosable={true}
                onCancel={handleCancel}
                focusTriggerAfterClose={true}
                footer={<div>
                <img
                  src={renewIcon}
                  onClick={clickVerso}
                  alt="Fechar modal"
                  className='verso'
                />
              </div>
            }
            > 
                {selectedSnack && (
                    <>
                        <div>
                            <img
                                src={imgVerso ? selectedSnack.frente : selectedSnack.verso}
                                style={{ width: '90%', height: 'auto', }}
                            />
                        </div>
                    </>
                )}
            </Modal>
        );
    };
    // }

    export default CustomModal;
