import styles from "./Settings.module.scss";

type Props = {
    title : string;
}
const Settings = (props:Props) => {
    return(
        <div className={styles.container}>
            <div className={styles.container__txt}>
                <img src="/google-logo.png" alt="" />
                <p>{props.title}</p>
            </div>
          <img src="penguinLinux.png" alt="" width={45} height={45} />
        </div>
    )
}

export default Settings;