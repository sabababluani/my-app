import styles from "./Buttons.module.scss";

type Props = {
    name: string;
    src: string;
    span ?: string;
}
const Button = (props: Props) => {


    return (

        <div className={styles.wrapper}>
            <div className={styles.flex}>
                <img src={props.src} />
                <p>{props.name}</p>
            </div>
            <div className={styles.span}>
                <p> {props.span}</p>
            </div>
        </div>

    )
}

export default Button;