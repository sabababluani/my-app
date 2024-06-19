import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { userNameState } from '@/app/atoms/states';
import styles from './Login.module.scss';
import Link from 'next/link';
import Register from '../Register/Register';

interface Props {
    onLoginSuccess: (username: string) => void;
}

const Login = (props: Props) => {
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userWantsRegister, setUserWantsRegister] = useState(false);
    const [open, setOpen] = useState(false);

    const onSuccesfulRegister = () => {
        setUserWantsRegister(false);
    };

    const onRegisterClick = () => {
        setUserWantsRegister(!userWantsRegister);
    };

    const onFinish: FormProps<any>['onFinish'] = (values: any) => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (values.username === storedUsername && values.password === storedPassword) {
            setOpen(false);
            setUserName(values.username);
            props.onLoginSuccess(values.username);
        } else {
            alert('Invalid username or password');
        }
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const onLoginClick = () => {
        setUserWantsRegister(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Sign in
            </Button>
            <Modal
                visible={open}
                onCancel={handleCancel}
                onOk={handleOk}
            >
                {!userWantsRegister ? (
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <div className={styles.createContainer}>
                            <Link href="#" onClick={onRegisterClick}>
                                Create New Account
                            </Link>
                        </div>
                    </Form>
                ) : (
                    <Register onLoginClick={onLoginClick} onSuccesfulRegister={onSuccesfulRegister} />
                )}
            </Modal>
        </>
    );
};

export default Login;