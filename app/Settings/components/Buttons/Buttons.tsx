import { darkModeState } from "@/app/atoms/states";
import styles from "./Buttons.module.scss";
import { useRecoilState } from "recoil";

type Props = {
    name: string;
    src: string;
    span ?: string;
}
const Button = (props: Props) => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);


    return (

        <div className={darkMode ? styles.darkWrapper : styles.wrapper}>
            <div className={darkMode ? styles.darkFlex : styles.flex}>
                <img src={props.src} />
                <p>{props.name}</p>
            </div>
            <div className={darkMode ? styles.darkSpan : styles.span}>
                <p> {props.span}</p>
            </div>
        </div>

    )
}

export default Button;