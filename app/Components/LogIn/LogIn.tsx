import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { FieldType } from '@/app/Interface/login.interface';


interface Props {
    onLoginSuccess: (username: string) => void;
}
const Login = (props: Props) => {

    const [userName, setUserName] = useState('')

    const onFinish: FormProps<FieldType>['onFinish'] = (values: any) => {
        console.log('Success:', values);
        setOpen(false)
        setUserName(values.username)
        props.onLoginSuccess(values.username)
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
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
                    onFinishFailed={onFinishFailed}
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

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                        style={{ width: "300px" }}
                    >
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Login;