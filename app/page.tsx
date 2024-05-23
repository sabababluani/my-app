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
    <>
      <Anchores src="/9button.png" alt = "shuffle"/>
      <Logo src="/pic19930.gif" alt ="google logo" style={{width : "350px" , height : "150px"}}/>
      <Maininput />
      <NotFooter />
    </>
  );
}