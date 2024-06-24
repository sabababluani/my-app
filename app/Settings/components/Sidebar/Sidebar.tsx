import { useRecoilState } from "recoil";
import styles from "./Sidebar.module.scss";
import { darkModeState } from "@/app/atoms/states";
import Link from "next/link";
import { userIsGeorgianState, profileIsVisibleState, userNameState } from "@/app/atoms/states";

const Sidebar = () => {

    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    return (
        <>
            <div className={darkMode ? styles.darkSidebar : styles.sidebar}>
                <div className={darkMode ? styles.darkSafe : styles.safe}>
                    <img src="security.png" alt="" />
                    <Link href={"/Options"}> {userIsGeorgian ? "კონფიდენციალურობა და უსაფრთხოება" : "Privacy and Security"}</Link>
                </div>
                <div className={darkMode ? styles.darkOption : styles.option}>
                    <img src="option.png" alt="" />
                    <Link href={"/Options"}> {userIsGeorgian ? "სხვა პარამეტრები" : "other options"}</Link>
                </div>
            </div>
        </>

    )
}

export default Sidebar