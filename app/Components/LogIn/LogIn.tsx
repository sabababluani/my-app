import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Modal } from 'antd';

import { useRecoilState } from 'recoil';
import { userIsGeorgianState, userNameState } from '@/app/atoms/states';


interface Props {
    onLoginSuccess: (username: string) => void;
}

const Login = (props: Props) => {

    const [userName, setUserName] = useRecoilState(userNameState);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState)

    const onFinish: FormProps['onFinish'] = (values: any) => {
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
              {userIsGeorgian ? "შესვლა" : "Sign In"}
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
                        label={userIsGeorgian ? "სახელი" : "Username"}
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={userIsGeorgian ? "პაროლი" : "Password"}
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
                        <Button type="primary" htmlType={"submit"}>
                            {userIsGeorgian ? "წარადგინე" : "Submit"}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Login;
