'use client';

import { useEffect, useRef, useState, ChangeEvent } from 'react';
import styles from './ProfileBurger.module.scss';
import Login from '../LogIn/LogIn';
import { userIsGeorgianState, profileIsVisibleState, userNameState } from "@/app/atoms/states";
import { useRecoilState } from 'recoil';
import Link from 'next/link';

type Props = { 
    pfpPicture : string;
}

const ProfileBurger: React.FC = () => {
    const [profileIsVisible, setProfileIsVisible] = useRecoilState(profileIsVisibleState);
    const [isLogOut, setIsLogOut] = useState(profileIsVisible);
    const [userName, setUserName] = useRecoilState(userNameState);
    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    const [randomNumber, setRandomNumber] = useState(0);
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedProfileIsVisible = localStorage.getItem('profileIsVisible');
        const storedRandomNumber = localStorage.getItem('randomNumber');
        const storedImage = localStorage.getItem('profileImage');

        if (storedUserName) setUserName(storedUserName);
        if (storedProfileIsVisible) setProfileIsVisible(storedProfileIsVisible === 'true');
        if (storedRandomNumber) setRandomNumber(parseInt(storedRandomNumber, 10));
        if (storedImage) setImage(storedImage);
    }, []);

    useEffect(() => {
        localStorage.setItem('userName', userName);
    }, [userName]);

    useEffect(() => {
        localStorage.setItem('profileIsVisible', profileIsVisible.toString());
    }, [profileIsVisible]);

    useEffect(() => {
        localStorage.setItem('randomNumber', randomNumber.toString());
    }, [randomNumber]);

    useEffect(() => {
        if (image) {
            localStorage.setItem('profileImage', image);
        }
    }, [image]);

    const handleLoginSuccess = (username: string) => {
        setUserName(username);
        setProfileIsVisible(false);
        setIsLogOut(false);
    };

    const toggleFn = () => {
        const newValue = !isLogOut;
        setProfileIsVisible(newValue);
        setIsLogOut(newValue);
    };

    useEffect(() => {
        const generateRandomNumber = () => Math.floor(Math.random() * 900) + 100;
        setRandomNumber(generateRandomNumber());
    }, []);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        if (inputRef.current !== null) {
            inputRef.current.click();
        }
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        !profileIsVisible &&
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div><p>{`${userName.toLowerCase()}${randomNumber}@gmail.com`}</p></div>
                <div className={styles.Profile}>
                    <img src={image || "/penguinLinux.png"} />
                    <div className={styles.pencilImg} onClick={handleImageClick}>
                        <img src='/pencil.jpg' />
                        <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleImageChange} />
                    </div>
                </div>
                <div className={styles.paragraph}>
                    <p>{userIsGeorgian ? `გამარჯობა, ${userName}!` : `Hi, ${userName}!`}</p>
                </div>
                <div className={`${styles.managebutton} ${userIsGeorgian ? styles.manageGeorgian : styles.managebutton}`}>
                    <button>{userIsGeorgian ? "მართეთ თქვენი Google ანგარიში" : "Manage your Google Account"}</button>
                </div>
                <div className={styles.addButton}>
                    <div className={styles.addAccount}>
                        <Link href='../AddAccount'><button><img src="/plus.png" alt="Add" />{userIsGeorgian ? "აქაუნთის დამატება" : "Add account"}</button></Link>
                    </div>
                    <div className={styles.signOut}>
                        <button onClick={toggleFn}><img src="/logout.png" alt="Sign Out" />{userIsGeorgian ? "გასვლა" : "Sign out"}</button>
                    </div>
                </div>
                <div className={styles.searchParagraph}>
                    <p>{userIsGeorgian ? "მეტი Google ძიება-დან" : "More from Google Search"}</p>
                </div>
                <div className={styles.deleteButtons}>
                    <div className={styles.historyButton}>
                        <button>
                            <div className={styles.innerHistoryButton}><img src="/searchhistory.png" alt="History" /> <p>{userIsGeorgian ? "ძიების ისტორია" : "Search History"}</p></div>
                            <p><span className={styles.deleteButtonsSaving}>{userIsGeorgian ? "ინახება" : "Saving"}</span></p>
                        </button>
                    </div>
                    <div className={styles.lastDeleteButton}>
                        <button><img src="/garbage4.png" alt="Delete" /> <p>{userIsGeorgian ? "ბოლო 15 წუთის წაშლა" : "Delete last 15 minutes"}</p></button>
                    </div>
                </div>
                <div className={styles.interestsButton}>
                    <button><img src="/interests.png" alt="Interests" /> <p>{userIsGeorgian ? "ინტერესები" : "Interests"}</p></button>
                </div>
                <div className={styles.buttonWrapper}>
                    <div className={styles.historyButton}>
                        <button>
                            <div className={styles.interestInner}><img src="/safety.png" alt="SafeSearch" /><p>SafeSearch</p></div>
                            <p><span className={styles.deleteButtonsSaving}>{userIsGeorgian ? "გათიშვა" : "Off"}</span></p>
                        </button>
                    </div>
                    <div className={styles.languagesbutton}>
                        <button>
                            <div className={styles.languageInner}><img src="/language.png" alt="Language" /><p>{userIsGeorgian ? "ენა" : "Language"}</p></div>
                            <p><span className={styles.deleteButtonsSaving}>{userIsGeorgian ? "English" : "ქართული"}</span></p>
                        </button>
                    </div>
                    <div className={styles.settingContainer}>
                        <div className={styles.settings}>
                            <button>
                                <div className={styles.settingButton}><img src="/settings.png" alt="Settings" /><Link href='/Settings'>{userIsGeorgian ? "სხვა პარამეტრები" : "More Settings"}</Link></div>
                            </button>
                        </div>
                        <div className={styles.help}>
                            <button>
                                <div className={styles.helpButton}><img src="/help.png" alt="Help" /><p>{userIsGeorgian ? "დახმარება" : "Help"}</p></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.anchores} ${userIsGeorgian ? styles.anchoresGeorgia : styles.anchores}`}>
                    <a href="#">{userIsGeorgian ? "კონფიდენციალურობის პოლიტიკა" : "Privacy Policy"}</a>
                    <span>•</span>
                    <a href="#">{userIsGeorgian ? "მომსახურების პირობები" : "Terms of Service"}</a>
                </div>
                <div className={styles.displayNone}>
                    <Login onLoginSuccess={handleLoginSuccess} />
                </div>
            </div>
        </div>
    );
}

export default ProfileBurger;
