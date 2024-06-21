
import styles from "./Otherbtn.module.scss";

type Props = {
    name: string;
    src: string;
    img ?: string;
    span ?: string;
}
const Otherbtn = (props: Props) => {


    return (

        <div className={styles.wrapper}>
            <div className={styles.flex}>
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