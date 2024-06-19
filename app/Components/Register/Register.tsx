import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styles from './Register.module.scss';

type FieldType = {
    username?: string;
    password?: string;
    confirmPassword: string;
    remember?: boolean;
};

interface Props {
    onLoginClick: () => void;
    onSuccesfulRegister: () => void;
}

const Register = ({ onLoginClick, onSuccesfulRegister }: Props) => {
    const onFinish: FormProps<FieldType>['onFinish'] = (registerValue) => {
        console.log('Success:', registerValue);

        if (registerValue && registerValue.username) {
            localStorage.setItem('username', registerValue.username)
        }

        if (registerValue && registerValue.password) {
            localStorage.setItem('password', registerValue.password)
        }        
        onSuccesfulRegister();
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.container}>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

                <div className={styles.createContainer}>
                    <Link href="#" onClick={onLoginClick}>
                        Already have an account?
                    </Link>
                </div>
            </Form>
        </div>
    );
};

export default Register;
