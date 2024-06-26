'use client'

import { useState } from "react";
import Anchores from "./Components/Anchores/Anchores";
import Burger from "./Components/Burger/Burger";
import Logo from "./Components/Logo/Logo";
import Maininput from "./Components/MainInput/MainInput";
import NotFooter from "./Components/NotFooter/Notfooter";
import styles from "./page.module.css";
import ProfileBurger from "./Components/ProfileBurger/ProfileBurger";

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const [isLog, setIsLog] = useState(false);


  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <Anchores active src="/9button.png" alt="shuffle" isActive={isActive} setHandleClick={setIsActive} isLog={isLog} setIsLog={setIsLog} />
        <div className={styles.navbar}>
          <div className={styles.wrapper}>
            <Logo src="/googleLogoo.png" alt="google logo" style={{ width: "250px", height: "90px" }} />
            <div className={styles.activeLogin}>
            </div>
            <Maininput />
          </div>
          <div className={isActive ? styles.activeBurger : styles.Burger}>
            <Burger />
          </div>
        </div>
      </div>
      <div className={isLog ? styles.activeProfileBurger : styles.inactiveProfileBurger}>
        <ProfileBurger />
      </div>
      <NotFooter />
    </div>
  );
}