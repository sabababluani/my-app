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


// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import Link from "next/link"
// import { useRecoilState } from 'recoil';
// import { userIsGeorgianState, userNameState } from '@/app/atoms/states';
// import styles from './Login.module.scss';
// import axios from 'axios';

// interface Props {
//     onLoginSuccess: (username: string) => void;
// }

// const Login = (props: Props) => {
//     const [userName, setUserName] = useRecoilState(userNameState);
//     const [userIsGeorgian] = useRecoilState(userIsGeorgianState)
//     const [userWantsRegister, setUserWantsRegister] = useState(false);
//     const [open, setOpen] = useState(false);
//     const [user, setUser] = useState('');
//     const [password, setPassword] = useState('');
//     const [userRegister, setUserRegister] = useState('');
//     const [passwordRegister, setPasswordRegister] = useState('');
//     const [passwordConfirmRegister, setPasswordConfirmRegister] = useState('');
//     const [error, setError] = useState('');

//     const handleOk = () => {
//         setOpen(false);
//     };

//     const handleCancel = () => {
//         setOpen(false);
//     };

//     const handleLogin = () => {
//         axios.post('/api/login', { username: user, password })
//             .then(response => {
//                 props.onLoginSuccess(user);
//             })
//             .catch(error => {
//                 setError(error.message); 
//             });
//     };

//     const handleRegister = () => {
//         axios.post('/api/register', { username: userRegister, password: passwordRegister })
//             .then(response => {
//                 props.onLoginSuccess(userRegister);
//             })
//             .catch(error => {
//                 setError(error.message);
//             });
//     };

//     const handleSubmit = () => {
//         if (userWantsRegister) {
//             handleRegister();
//         } else {
//             handleLogin();
//         }
//     };

//     const onUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUser(e.target.value);
//     };

//     const onUserPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

//     const onUserNameChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setUserRegister(e.target.value);
//     };

//     const onUserPasswordChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPasswordRegister(e.target.value);
//     };

//     const onUserPasswordConfirmChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPasswordConfirmRegister(e.target.value);
//     };

//     return (
//         <div className={styles.wrapper}>
//             <Button type="primary" onClick={() => setOpen(true)}>
//                 {userIsGeorgian ? "შესვლა" : "Sign In"}
//             </Button>
//             <Modal
//                 visible={open}
//                 onCancel={handleCancel}
//                 onOk={handleOk}
//             >
//                 {!userWantsRegister && (
//                     <>
//                         <div className={styles.inputContainer}>
//                             <div className={styles.userInput}><label htmlFor="1">Username</label> <input type="text" id='1' onChange={onUserNameChange} value={user} /></div>
//                             <div className={styles.passwordInput}><label htmlFor="2">Password</label> <input type="password" id='2' onChange={onUserPasswordChange} value={password} /></div>
//                         </div>
//                         <div className={styles.submitButton}>
//                             <button onClick={handleSubmit}>Submit</button>
//                         </div>
//                         <div className={styles.container}>
//                             <Link href="" onClick={() => setUserWantsRegister(!userWantsRegister)}>
//                                 {userWantsRegister ? "Already have an account?" : "Create new account"}
//                             </Link>
//                         </div>
//                     </>
//                 )}

//                 {userWantsRegister && (
//                     <>
//                         <div className={styles.inputContainer}  >
//                             <div className={styles.inputContainerRegister}>
//                                 <div className={styles.userInput}><label htmlFor="1">Username</label> <input type="text" id='1' onChange={onUserNameChangeRegister} value={userRegister} /></div>
//                                 <div className={styles.passwordInput}><label htmlFor="3">Password</label> <input type="password" id='3' onChange={onUserPasswordChangeRegister} value={passwordRegister} /></div>
//                                 <div className={styles.confirmPassword}><label htmlFor='4'>Confirm Password</label> <input type='password' id='4' onChange={onUserPasswordConfirmChangeRegister} value={passwordConfirmRegister} /></div>
//                             </div>
//                         </div>
//                         <div className={styles.submitButton}>
//                             <button onClick={handleSubmit}>Register</button>
//                         </div>
//                         <div className={styles.container}>
//                             <Link href="" onClick={() => setUserWantsRegister(!userWantsRegister)}>
//                                 {userWantsRegister ? "Already have an account?" : "Create new account"}
//                             </Link>
//                         </div>
//                     </>
//                 )}
//             </Modal>
//         </div>
//     );
// };

// export default Login;
