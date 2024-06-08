'use client '

import { useState } from 'react';
import styles from './ProfileBurger.module.scss'
import Login from '../LogIn/LogIn';
import { userIsGeorgianState, userIsLogedOutState, userNameState } from "@/app/atoms/states";
import { useRecoilState } from 'recoil';
import Link from 'next/link';

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

    // const generateRandomNumber = () => {
    //     return Math.floor(Math.random() * 900) + 100; 
    // };

    return (
        !profileIsVisible &&
        <div className={styles.wrapper} >
            <div className={styles.container}>
                <div><p>{`${userName}467@gmail.com`}</p></div>
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
                        <Link href='../AddAccount'><button><img src="/plus.png" />{userIsGeorgian ? "აქაუნთის დამატება" : "Add account"}</button></Link>
                    </div>
                    <div className={styles.signOut}>
                        <button onClick={toggleFn}><img src="/logout.png" />{userIsGeorgian ? "გასვლა" : "Sign out"}</button>
                    </div>
                </div>
                <div className={styles.searchParagraph}>
                    <p>{userIsGeorgian ? "მეტი Google ძიება-დან" : "More from Google Search"}</p>
                </div>
                <div className={styles.deleteButtons}>
                    <div className={styles.historyButton}>
                        <button><div className={styles.innerHistoryButton}><img src="/searchhistory.png" /> <p>{userIsGeorgian ? "ძიების ისტორია" : "Search History"} </p></div>
                            <p><span className={styles.deleteButtonsSaving}>{userIsGeorgian ? "ინახება" : "Saving"}</span></p></button>
                    </div>
                    <div className={styles.lastDeleteButton}>
                        <button><img src="/garbage4.png" /> <p>{userIsGeorgian ? "ბოლო 15 წუთის წაშლა" : "Delete last 15 minutes"} </p></button>
                    </div>
                </div>
                <div className={styles.interestsButton}>
                    <button><img src="/interests.png" /> <p>{userIsGeorgian ? "ინტერესები" : "Interests"} </p></button>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.historyButton}>
                        <button><div className={styles.interestInner}><img src="/safety.png" /><p>SafeSearch</p></div>
                            <p><span className={styles.deleteButtonsSaving}>{userIsGeorgian ? "გათიშვა" : "Off"}</span></p></button>
                    </div>
                    <div className={styles.languagesbutton}>
                        <button><div className={styles.languageInner}><img src="/language.png" /><p>{userIsGeorgian ? "ენა" : "Language"}</p></div>
                            <p><span className={styles.deleteButtonsSaving}>{userIsGeorgian ? "English" : "ქართული"}</span></p></button>
                    </div>
                    <div className={styles.settingContainer}>
                        <div className={styles.settings}>
                            <button><div className={styles.settingButton}><img src="/settings.png" /><p>{userIsGeorgian ? "სხვა პარამეტრები" : "More Settings"}</p></div></button>
                        </div>
                        <div className={styles.help}>
                            <button><div className={styles.helpButton}><img src="/help.png" /><p>{userIsGeorgian ? "დახმარება" : "Help"}</p></div></button>
                        </div>
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
        </div>
    );
}


export default ProfileBurger;