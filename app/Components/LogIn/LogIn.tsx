import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import Link from "next/link"
import { useRecoilState } from 'recoil';
import { userIsGeorgianState, userNameState } from '@/app/atoms/states';
import styles from './Login.module.scss'
import axios from 'axios';

interface Props {
    onLoginSuccess: (username: string) => void;
}

const Login = (props: Props) => {
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState)
    const [userWantsRegister, setUserWantsRegister] = useState(false);
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const onFinish = (values: any) => {
        if (userWantsRegister) {
            axios.post('your_register_endpoint', {
                username: values.username,
                password: values.password
            }).then((response) => {
                setUserName(values.username);
                props.onLoginSuccess(values.username);
            }).catch((error) => {
                setError('Registration failed');
            });
        } else {
            axios.post('your_login_endpoint', {
                username: values.username,
                password: values.password
            }).then((response) => {
                setUserName(values.username);
                props.onLoginSuccess(values.username);
            }).catch((error) => {
                setError('Login failed');
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <Button type="primary" onClick={() => setOpen(true)}>
                {userIsGeorgian ? "შესვლა" : "Sign In"}
            </Button>
            <Modal
                visible={open}
                onCancel={handleCancel}
                onOk={handleOk}
            >
                <div className={styles.inputContainer}>
                    <div className={styles.userInput}><label htmlFor="1">Username</label> <input type="text" id='1' /></div>
                    <div className={styles.passwordInput}><label htmlFor="2">Password</label> <input type="Password" id='2' /></div>
                </div>
                <div className={styles.submitButton}>
                    <input type="submit" />
                </div>
                <div className={styles.container}>
                    <Link href="" onClick={() => setUserWantsRegister(!userWantsRegister)}>
                        {userWantsRegister ? "Already have an account?" : "Create new account"}
                    </Link>
                </div>
            </Modal>
        </div>
    );
};

export default Login;
