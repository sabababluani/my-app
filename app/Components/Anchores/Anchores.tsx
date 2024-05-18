import Styles from "./Anchores.module.scss"
import Button from "./BlueButton/BlueButton"

export default function Anchores() {
    return (
        <div className={Styles.container}>
            <div className={Styles.anchore}>
                <a href="#">Gmail</a>
                <a href="#">სურათები</a>
            </div>
            <div className={Styles.wrapper}>
                <img src="9button.png" alt="Shuffle" />
                <Button />
            </div>
        </div>
    )
}