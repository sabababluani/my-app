import { useState } from "react";
import styles from './Profile.module.scss'
import Login from "../../LogIn/LogIn";

interface Props {
    handleClick: (value: boolean) => void;
    isLog: boolean;
}

const Profile =  (props: Props) => {

    const [isLog, setIsLog] = useState(false)
    const [userName, setUserName] = useState('')

    const handleLoginSuccess = (username: string) => {
        setUserName(username);
    };
    const toggleProfile = () => {
        props.handleClick(!props.isLog);
    };

    return (
        userName ? (<div className={styles.ProfileWrapper} onClick={toggleProfile}>
            <div className={styles.Profile}>
                <img src="/penguinLinux.png" alt="pingvinishka" />
            </div>
            <p>{userName}</p>
        </div>) : (<Login onLoginSuccess={handleLoginSuccess} />)
    )
}

export default Profile;