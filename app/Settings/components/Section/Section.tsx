
import styles from "./Section.module.scss";



const Section = () => {
    return (
        <div className={styles.container}>
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
            <div className={styles.cont}>
                <div className={styles.sec}>
                    <div className={styles.activity}>
                        <h2>activity</h2>
                        <p>
                            When you save history to your account as part of your web and app activity,
                            Google can use it to improve your experience
                        </p>




                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.flex}>
                        <img src="history.png" alt="" />
                        <p>Search history</p>
                    </div>
                    <div className={styles.span}>
                        <p> Saving in progress</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Section;