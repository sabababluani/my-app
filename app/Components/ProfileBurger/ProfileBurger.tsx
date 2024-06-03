import styles from './ProfileBurger.module.scss'


interface Props {

}


const ProfileBurger = (props :Props ) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.Profile}>
                <img src="/penguinLinux.png" />
            </div>
            <div className={styles.paragraph}>
                <p>Hi {}!</p>
            </div>
            <div className={styles.managebutton}>
                <button>Manage your Google Acoount</button>
            </div>
            <div className={styles.addButton}>
                <div className={styles.addAccount}>
                    <button><img src="/plus.png" alt="" />Add account</button>
                </div>
                <div className={styles.signOut}>
                    <button><img src="/logout.png" alt="" /> Sign out</button>
                </div>
            </div>
            <div className={styles.anchores}>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    );
}


export default ProfileBurger;