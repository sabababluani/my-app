
import Link from "next/link";
import Button from "../Buttons/Buttons";
import OptionBtn from "../OptionsBtn/OptionsBtn";
import styles from "./Section.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import { darkModeState } from "@/app/atoms/states";
import { useRecoilState } from "recoil";



const Section = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.sec}>
                <div className={darkMode ? styles.darkSectionTxt : `${styles.activity} ${styles.sectionTxt}`}>
                    <h2>activity</h2>
                    <p>
                        When you save history to your account as part of your web and app activity,
                        Google can use it to improve your experience
                    </p>
                </div>
                <div className={styles.btn}>
                     <Button name='Search History' span='Saving in progress' src="history.png" />
                </div>
               
                <div className={darkMode ? styles.darkSectionTxt : `${styles.activity} ${styles.sectionTxt}`}>
                    <h2>content</h2>
                    <p>
                        Control the types of search results you see by setting personalization and inappropriate content settings
                    </p>
                </div>
                <div className={`${styles.btn} ${styles.contentBtn}`}>
                    <Button name='Personal results' span='Involved' src="personal.png" />
                    <Button name='SafeSearch' span='Filtering is enabled' src="handshake.png" />
                </div>
                <div className={darkMode ? styles.darkSectionTxt : `${styles.activity} ${styles.sectionTxt}`}>
                    <h2>other options</h2>
                    <div className={styles.btn}>
                        <OptionBtn name='Google Account Settings' src="user.png" />
                        <OptionBtn name='Parental controls on Family Link' src="familylink.png" />
                    </div>

                </div>

                <div className={darkMode ? styles.darkLinks : styles.links}>
                    <ul>
                        <Link href="#">Feedback</Link>
                        <Link href="#">Help</Link>
                        <Link href="#">Confidential</Link>
                        <Link href="#">Rules</Link>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Section;