'use client'

import Settings from "./Settings";
import styles from './page.module.scss';

const SettingSearch =()  => {
    return(
        <header className={styles.header}>
            <Settings  title = 'ძიების პარამეტრები' />
        </header>
    )
}
export default SettingSearch