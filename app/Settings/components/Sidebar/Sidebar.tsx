import { useRecoilState } from "recoil";
import styles from "./Sidebar.module.scss";
import { darkModeState } from "@/app/atoms/states";
import Link from "next/link";
import { userIsGeorgianState, profileIsVisibleState } from "@/app/atoms/states";
import { usePathname } from "next/navigation";

const Sidebar = () => {

    const [userIsGeorgian] = useRecoilState(userIsGeorgianState);
    
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    const pathName = usePathname();
    
    
    return (
        <>
            <div className={darkMode ? styles.darkSidebar : styles.sidebar}>
                <div className={pathName ==='/Otheroptions' ? (darkMode ? styles.darkSafe : styles.safe ): styles.offContainer}>
                    <img src="security.png" alt="" />

                    <p> Privacy and Security</p>
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