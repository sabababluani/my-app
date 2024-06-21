'use client'

import { useState, useEffect } from "react";
import styles from './Profile.module.scss';
import Login from "../../LogIn/LogIn";
import { useRecoilState } from "recoil";
import { profileIsVisibleState } from "@/app/atoms/states";

interface Props {
    handleClick: (value: boolean) => void;
    isLog: boolean;
}

const Profile = (props: Props) => {

    const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
    const [userIsLogedOut, setUserIsLogedOut] = useRecoilState(profileIsVisibleState);
    const [image, setImage] = useState<string | null>(null)

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
        setImage(localStorage.getItem('profileImage'))
    }, [localStorage.getItem('profileImage')])


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
                        <img src={image ? image : "/penguinLinux.png"} alt="pingvinishka" />
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
