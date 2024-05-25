import styles from './Icons.module.scss'


interface Props {
    title: string;
    photo: string;
    style?: React.CSSProperties;
}

export default function Icon(props: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.containeri}>
                <img src={props.photo} alt="logo" />
            </div>
            <p style={props.style}>{props.title}</p>
        </div>
    )
}