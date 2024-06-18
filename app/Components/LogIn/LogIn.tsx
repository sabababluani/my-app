import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { userNameState } from '@/app/atoms/states';
import styles from './Login.module.scss'
import Link from 'next/link';

interface Props {
    onLoginSuccess: (username: string) => void;
}
const Login = (props: Props) => {

    const [userName, setUserName] = useRecoilState(userNameState);

    const onFinish: FormProps<any>['onFinish'] = (values: any) => {
        setOpen(false);
        setUserName(values.username);
        props.onLoginSuccess(values.username);
    };

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
        <div>
            <Button type="primary" onClick={showModal}>
                Sign in
            </Button>
            <Modal
                visible={open}
                onCancel={handleCancel}
                onOk={handleOk}
            >
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
                        <Link href ="/Register" >Create New Account</Link>
                    </div>
                </Form>
            </Modal>
        </div>
    );
};
export default Login;