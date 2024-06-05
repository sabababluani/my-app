import { useState } from "react";
import styles from './Profile.module.scss';
import Login from "../../LogIn/LogIn";
import { useRecoilState } from "recoil";
import { userIsLogedOutState } from "@/app/atoms/states";

interface Props {
    handleClick: (value: boolean) => void;
    isLog: boolean;
}

const Profile = (props: Props) => {

    const [userName, setUserName] = useState('');
    const [userIsLogedOut, setUserIsLogedOut] = useRecoilState(userIsLogedOutState);



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
                        <img src="/penguinLinux.png" alt="pingvinishka" />
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