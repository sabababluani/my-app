import { useState } from 'react';
import styles from './ProfileBurger.module.scss'
import Login from '../LogIn/LogIn';
import { userIsGeorgianState, userIsLogedOutState, userNameState } from "@/app/atoms/states";
import { useRecoilState } from 'recoil';

const ProfileBurger = () => {

    const [profileIsVisible, setProfileIsVisible] = useRecoilState(userIsLogedOutState);
    const [isLogOut, setIsLogOut] = useState(profileIsVisible);
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);

    const handleLoginSuccess = (username: string) => {
        setUserName(username);
    };

    const toggleFn = () => {
        setProfileIsVisible(!isLogOut);
        setIsLogOut(!isLogOut);
    };

    return (
        !profileIsVisible &&
        <div className={styles.wrapper} >
            <div className={styles.Profile}>
                <img src="/penguinLinux.png" />
            </div>
            <div className={styles.paragraph}>
                <p>{userIsGeorgian ? `გამარჯობა, ${userName}!` : `Hi, ${userName}!`}</p>
            </div>
            <div className={`${styles.managebutton}  ${userIsGeorgian ? styles.manageGeorgian : styles.managebutton} `}>
                <button>{userIsGeorgian ? "მართეთ თქვენი Google ანგარიში" : "Manage your Google Acoount"}</button>
            </div>
            <div className={styles.addButton}>
                <div className={styles.addAccount}>
                    <button><img src="/plus.png" />{userIsGeorgian ? "აქაუნთის დამატება" : "Add account"}</button>
                </div>
                <div className={styles.signOut}>
                    <button onClick={toggleFn}><img src="/logout.png" />{userIsGeorgian ? "გასვლა" : "Sign out"}</button>
                </div>
            </div>
            <div className={`${styles.anchores} ${userIsGeorgian ? styles.anchoresGeorgia : styles.anchores}`} >
                <a href="#">{userIsGeorgian ? "კონფიდენციალურობის პოლიტიკა" : "Privacy Policy "}</a>
                <span>•</span>
                <a href="#">{userIsGeorgian ? "Მომსახურების პირობები" : "Terms of Service"}</a>
            </div>
            <div className={styles.displayNone}>
                <Login onLoginSuccess={handleLoginSuccess} />
            </div>
        </div>
    );
}


export default ProfileBurger;