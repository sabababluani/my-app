import { useRecoilState } from "recoil";
import styles from "./Sidebar.module.scss";
import { darkModeState } from "@/app/atoms/states";

const Sidebar = () => {
    
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    return (
        <>
            <div className={darkMode ? styles.darkSidebar : styles.sidebar}>
                <div className={darkMode ? styles.darkSafe : styles.safe}>
                    <img src="security.png" alt="" />
                    <p>Privacy and Security</p>
                </div>
                <div className={darkMode ? styles.darkOption : styles.option}>
                    <img src="option.png" alt="" />
                    <p>other options</p>
                </div>
            </div>
        </>

    )
}

export default Sidebar