import style from "./MiniButton.module.scss"

interface Props {
    title: string;
}

export default (props: Props) => {
    console.log(props.title)
    return (
        <div className={style.container}>
            <div className={style.containeri}>
                <img src="/peng.png" alt="logo" />
            </div>
            <p>{props.title}</p>
        </div>
    )
}