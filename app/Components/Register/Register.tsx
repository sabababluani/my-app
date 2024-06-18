import React, { useState } from 'react';
import { Modal } from 'antd';


interface Props {
    onLoginSuccess: (username: string) => void;
}
const Register = (props: Props) => {

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (

            <Modal
                visible={open}
                onCancel={handleCancel}
                onOk={handleOk}
            >

            </Modal>
    );
};

export default Register;