import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "App.scss"
import {ModalProps} from "components/Modal/types";

const ModalForm: React.FC<ModalProps> = ({ children, title, onHide }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        onHide();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="app">
            <Button style={{ width: '200px', height: '50px', marginTop: '50px' }} onClick={showModal}>
                Играть Квиз
            </Button>
            <Modal
                centered
                footer={null}
                title={title}
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleOk}>
                {children}
            </Modal>
        </div>
    );
};

export default ModalForm;