'use client'

import { useState } from "react";
import Anchores from "../Components/Anchores/Anchores";
import Logo from "../Components/Logo/Logo";
import Maininput from "../Components/MainInput/MainInput";
import NotFooter from "../Components/NotFooter/Notfooter";
import styles from './page.module.scss'
import Burger from "../Components/Burger/Burger";
import ProfileBurger from "../Components/ProfileBurger/ProfileBurger";

export default function Picture() {
    const [isActive, setIsActive] = useState(false);
    const [isLog, setIsLog] = useState(false);
    return (
        <div className={styles.wrapper}>
            <Anchores style={{ paddingTop: "25px", marginTop: "0px" }} src="/9white.png" alt="shuffle" isActive={isActive} setHandleClick={setIsActive} isLog={isLog} setIsLog={setIsLog} />
            <Logo src="/google-white-logo-1.png" alt="google logo" style={{ width: "300px", height: "100px", margin: "0 auto", paddingTop: "60px" }} />
            <Maininput wrapperStyle={{
                display: "none",
                backgroundColor: "transparent",
                marginTop: "100px"
            }}
                inputStyle={{ background: "transparent", color: "#fff", border: "none" }}
                mainStyle={{ marginTop: "80px" }}
                darkMode={{ color: "#fff" }}
            />
            <div className={isActive ? styles.activeBurger : styles.Burger}>
                <Burger />
            </div>
            <div className={isLog ? styles.activeProfileBurger : styles.inactiveProfileBurger}>
                <ProfileBurger />
            </div>
            <NotFooter backStyle={{ background: "#1b1b1c", color: "#fff" }} />
        </div>
    );
}