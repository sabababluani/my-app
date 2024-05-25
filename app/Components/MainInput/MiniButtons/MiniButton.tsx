import React from "react";
import style from "./MiniButton.module.scss"

interface Props {
    title: string;
    style? : React.CSSProperties;
}

export default (props: Props) => {
    return (
        <div className={style.container}>
            <div className={style.containeri}>
                <img src="/peng.png" alt="logo" />
            </div>
            <p style={props.style}>{props.title}</p>
        </div>
    )}