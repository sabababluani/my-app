import Sidebar from "@/app/Settings/components/Sidebar/Sidebar";
import styles from "./Otheroptions.module.scss";
import Otherbtn from "../Otherbtn/Otherbtn";
import Link from "next/link";

const Otheroptions = () => {

    return (
        <>
            <div className={styles.container}>
                <Sidebar />

                <div className={styles.section}>
                    <div className={styles.txt}>
                        <h2>language</h2>
                        <p>Manage the language of your Google Search display and choose the settings you want for your results</p>
                        <Otherbtn name='language and region' src="global.png" img="arrow.png" />
                    </div>
                    <div className={styles.txt}>
                        <h2>Desktop</h2>
                        <p>Customize the look and feel of Google Search on your device</p>
                        <div className={styles.wrapper}>
                            <div className={styles.flex}>
                                <img src="moon.png" className={styles.global} />
                                <p>Dark theme</p>
                            </div>
                            <div className={styles.text}>
                                <p>disabled</p>
                            </div>
                        </div>

                        <Otherbtn name='continuous movement' src="scroll.png" img="switches.png" />
                        <Otherbtn name='Open results in a new window' src="add.png" img="switches.png" />
                        <Otherbtn name='Autocomplete with trending searches' src="pencil.png" img="switches.png" />

                    </div>

                    <div className={styles.links}>
                        <ul>
                            <Link href="#">Feedback</Link>
                            <Link href="#">Help</Link>
                            <Link href="#">Confidential</Link>
                            <Link href="#">Rules</Link>
                        </ul>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Otheroptions;