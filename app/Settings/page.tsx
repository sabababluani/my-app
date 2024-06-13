'use client'

import Settings from "./components/Settings/Settings";
import styles from './page.module.scss';
import Section from "./components/Section/Section";


const SettingSearch = () => {
    return (
        <>
            <header className={styles.header}>
                <Settings title='Search options' />
            </header>
            
                <Section />
            
            
        </>

    )
}
export default SettingSearch;