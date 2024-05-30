import React from "react";
import style from "./MiniButton.module.scss"
import Link from "next/link";

interface Props {
    title: string;
    style?: React.CSSProperties;
    onDelete: () => void;
}

export default (props: Props) => {
    return (
        <div className={style.container}>
            <img src="X.png" onClick={props.onDelete}/>
            <Link href={`https://www.${props.title}.com`}>
                <div className={style.containeri}>
                    <img src="/peng.png" alt="logo" />
                </div>
                <p style={props.style}>{props.title}</p>
            </Link>
        </div>
    )
}