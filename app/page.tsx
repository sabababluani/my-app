'use client'

import { useState } from "react";
import Anchores from "./Components/Anchores/Anchores";
import Burger from "./Components/Burger/Burger";
import GrayButton from "./Components/GrayButton/GrayButton";
import Logo from "./Components/Logo/Logo";
import Maininput from "./Components/MainInput/MainInput";
import Maintext from "./Components/Maintext/Maintext";
import NotFooter from "./Components/NotFooter/Notfooter";
import styles from "./page.module.css";
import Login from "./Components/LogIn/LogIn";

export default function Home() {

  const [isActive , setIsActive] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <Anchores active src="/9button.png" alt="shuffle"  isActive = {isActive} setHandleClick={setIsActive}/>
        <div className={styles.navbar}>
          <div className={styles.wrapper}>
            <Logo src="/pic19930.gif" alt="google logo" style={{ width: "250px", height: "100px" }} />
            <div className={styles.activeLogin }>
          </div>
            <Maininput />
          </div>
          <div className={isActive ? styles.activeBurger : styles.Burger}>
            <Burger />
          </div>
        </div>
      </div>
      <NotFooter backStyle={{ color: "black" }} />
    </div>
  );
}