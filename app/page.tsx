'use client'

import Anchores from "./Components/Anchores/Anchores";
import GrayButton from "./Components/GrayButton/GrayButton";
import Logo from "./Components/Logo/Logo";
import Maininput from "./Components/MainInput/MainInput";
import Maintext from "./Components/Maintext/Maintext";
import NotFooter from "./Components/NotFooter/Notfooter";
import styles from "./page.module.css";

export default function Home() {
  const userIsGeorgian = true;

  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
        <Anchores active src="/9button.png" alt="shuffle" />
        <div className={styles.wrapper}>
          <Logo src="/pic19930.gif" alt="google logo" style={{ width: "250px", height: "100px" }} />
          <Maininput />
        </div>
      </div>
      <NotFooter backStyle={{ color: "black" }} />
    </div>
  );
}