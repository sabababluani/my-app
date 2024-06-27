import styles from './LittleNavBar.module.scss';


const LittleNavBar = () => {
    return (
        <div className={styles.container}>
            <ul>
                <li>Search settings</li>
                <li>Advanced Search</li>
                <li>Your data in Search</li>
                <li>Search history</li>
                <li>Search help</li>
                <li>Send feedback</li>
                <li>Dark theme : Off</li>
            </ul>
        </div>
    )
}
export default LittleNavBar;