import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.safe}>
                    <img src="security.png" alt="" />
                    <p>Privacy and Security</p>
                </div>
                <div className={styles.option}>
                    <img src="option.png" alt="" />
                    <p>other options</p>
                </div>
            </div>
        </>

    )
}

export default Sidebar