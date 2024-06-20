import styles from "./Settings.module.scss";


const Settings = () => {
    return(
        <div className={styles.container}>
            <div className={styles.container__txt}>
                <img src="/google-logo.png" alt="" />
                <p>Search options</p>
            </div>
          <img src="penguinLinux.png" alt="" width={45} height={45} />
        </div>
    )
}

export default Settings;