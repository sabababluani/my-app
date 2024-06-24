'use client'

import Settings from "../Settings/components/Settings/Settings"
import Otheroptions from "./Otheroptions/Otheroptions";
import styles from "./page.module.scss";



const Options = () => {
    return (
        <>
            <header className={styles.header}>
                <Settings />
            </header>

            <div className={styles.section}>
              <Otheroptions/>
            </div>
        </>

    )
}

export default Options;