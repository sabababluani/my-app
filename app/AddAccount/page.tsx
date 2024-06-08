'use client'


import styles from './page.module.scss';
import Link from "next/link";

const addAccount = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.googleLogo}>
                    <div><img src="/favicon.ico" /></div>
                    <h2>Sign in</h2>
                    <p>Use your Google Account</p>
                </div>
                <div className={styles.searchInput}>
                    <div className={styles.searchInputFlex}>
                        <Link href=''>Forgot email?</Link>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Not your computer? Use Guest mode to sign in privately. <br />
                        <Link href=''>Learn more about using Guest mode</Link></p>
                    </div>
                    <div className={styles.buttons}> 
                        <div className={styles.createButton}><button>Create account</button></div>
                        <div className={styles.nextButton}><button>Next</button></div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}



export default addAccount;