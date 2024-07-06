import Link from 'next/link';
import styles from './LittleNavBar.module.scss';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { darkModeState } from '@/app/atoms/states';


const LittleNavBar = () => {

    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevState => !prevState);
    };

    return (
        <ul className={darkMode ? styles.darkModeContainer:styles.container}>
            <li><Link href='/Settings'>Search settings</Link></li>
            <li><Link href='#'>Advanced Search</Link></li>
            <li><Link href='#'>Your data in Search</Link></li>
            <li><Link href='#'>Search history</Link></li>
            <li><Link href='#'>Search help</Link></li>
            <li><Link href='#'>Send feedback</Link></li>
            <li><Link href='#' onClick={toggleDarkMode}><div className={styles.lastChild}>Dark theme : {darkMode ? 'Off' : 'On'}<div className={styles.darkModeToggle} onClick={toggleDarkMode}>
                {darkMode ? <img src="/sun.png" alt="Sun" /> : <img src="/moon.png" alt="Moon" />}
            </div></div></Link></li>
        </ul>
    )
}
export default LittleNavBar;