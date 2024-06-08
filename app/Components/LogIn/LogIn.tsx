import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import Link from "next/link"
import { useRecoilState } from 'recoil';
import { userIsGeorgianState, userNameState } from '@/app/atoms/states';
import styles from './Login.module.scss'

interface Props {
    onLoginSuccess: (username: string) => void;
}

const Login = (props: Props) => {

    const [userName, setUserName] = useRecoilState(userNameState);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState)
    const [userWantsRegister, setUserWantsRegister] = useState(false);


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
        userWantsRegister ?
            <div className={styles.wrapper}>
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
                        <Form.Item className={styles.inputContainer}
                            label={userIsGeorgian ? "სახელი" : "Username"}
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input  className={styles.confirmPasswordInpit} />
                        </Form.Item>

                        <Form.Item className={styles.inputContainer}
                            label={userIsGeorgian ? "პაროლი" : "Password"}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password   className={styles.confirmPasswordInpit} />
                        </Form.Item>
                        <Form.Item className={styles.inputContainer}
                            label={userIsGeorgian ? "გაიმეორე პაროლი:" : "Confirm password:"}
                            name="password"
                            rules={[{ required: true, message: 'Please repeat your password!' }]}
                        >
                            <Input.Password className={styles.confirmPasswordInpit} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType={"submit"} onClick={() => { setUserWantsRegister(false) }}>
                                {userIsGeorgian ? "რეგისტრაცია" : "Register"}
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className={styles.container} >
                        <Link href='' onClick={() => { setUserWantsRegister(false) }}>Already have an account?</Link>
                    </div>
                </Modal>
            </div> :
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
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType={"submit"}>
                                {userIsGeorgian ? "წარადგინე" : "Submit"}
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className={styles.container} >
                        <Link href='' onClick={() => { setUserWantsRegister(true) }}>Create new account</Link>
                    </div>
                </Modal>
            </div>
    );
};

export default Login;
