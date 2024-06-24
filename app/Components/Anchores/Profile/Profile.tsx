'use client'

import { useState, useEffect } from "react";
import styles from './Profile.module.scss';
import Login from "../../LogIn/LogIn";
import { useRecoilState } from "recoil";
import { imageChangeState, profileIsVisibleState } from "@/app/atoms/states";

interface Props {
    handleClick: (value: boolean) => void;
    isLog: boolean;
}

const Profile = (props: Props) => {

    const [userName, setUserName] = useState(localStorage.getItem('username') || '');
    const [userIsLogedOut, setUserIsLogedOut] = useRecoilState(profileIsVisibleState);
    const [image, setImage] = useRecoilState(imageChangeState);

    useEffect(() => {
        const storedUserIsLogedOut = localStorage.getItem('userIsLogedOut');
        if (storedUserIsLogedOut !== null) {
            setUserIsLogedOut(storedUserIsLogedOut === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userName', userName);
    }, [userName]);

    useEffect(() => {
        const profileImage = localStorage.getItem('profileImage');
        setImage(profileImage || "/penguinLinux.png");
    }, []);

    useEffect(() => {
        localStorage.setItem('userIsLogedOut', userIsLogedOut.toString());
    }, [userIsLogedOut]);

    const handleLoginSuccess = (username: string) => {
        setUserName(username);
        setUserIsLogedOut(false);
    };

    const toggleProfile = () => {
        props.handleClick(!props.isLog);
    };

    return (
        userIsLogedOut ? (
            <Login onLoginSuccess={handleLoginSuccess} />
        ) : (
            userName ? (
                <div className={styles.ProfileWrapper} onClick={toggleProfile}>
                    <div className={styles.Profile}>
                        <img src={image} alt="pingvinishka" />
                    </div>
                    <p>{userName}</p>
                </div>
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )
        )
    );

}

export default Profile;
