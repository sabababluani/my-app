
import { useRecoilState } from "recoil";
import styles from "./Otherbtn.module.scss";
import { darkModeState } from "@/app/atoms/states";

type Props = {
    name: string;
    src: string;
    img ?: string;
    span ?: string;
}
const Otherbtn = (props: Props) => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);


    return (

        <div className={darkMode ? styles.darkWrapper : styles.wrapper}>
            <div className={darkMode ? styles.darkFlex : styles.flex}>
                <img src={props.src} className={styles.global} />
                <p>{props.name}</p>
            </div>
            <div className={styles.image}>
                <img src= {props.img} /> 
            </div>
        </div>

    )
}

export default Otherbtn;