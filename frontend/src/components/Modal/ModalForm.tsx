import React, { useState } from 'react';
import { Button, Modal } from 'antd';

type ModalProps = {
    title: string;
    onHide?: () => void;
};

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
        <div>
            <Button style={{ width: '200px', height: '50px' }} onClick={showModal}>
                Начать Quiz
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