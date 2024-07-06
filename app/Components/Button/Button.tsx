import styles from './Button.module.scss';


interface Props {
    title: string;
    mode?: 'outline' | 'fill';
    disabled?: boolean;
    classname?: string;
}
const Button = (props: Props) => {

    const classes = [styles.container];

    if (props.mode === 'fill') classes.push(styles.fill);
    else classes.push(styles.outline);

    return (
        <button
            disabled={props.disabled}
            className={classes.join(' ').trim()}
        >
            {props.title}
        </button>
    )
}

export default Button;