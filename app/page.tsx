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
      <Anchores />
      <Logo />
      <Maininput />
      <NotFooter />
    </>
  );
}
