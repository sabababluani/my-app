'use client'

import { useState } from "react";
import Styles from "./Anchores.module.scss"
import Button from "./BlueButton/BlueButton"
import Info from "./Info/Info";

interface Props {
    style?: React.CSSProperties;
    src: string;
    alt: string;
    active?: boolean;
    setHandleClick : (value:boolean) => void;
    handleTaskDelete: ( index: any ) =>void;
    isActive : boolean;
}

export default function Anchores(props: Props) {
    const userIsGeorgian = true;

    const [isActive , setIsActive] = useState(false)

    return (
        <div className={Styles.container} style={props.style}>
            {props.active && <Info displayPics />}
            <div className={Styles.wrapper} >
                <div className={Styles.buttons} onClick={() => props.setHandleClick(!props.isActive)} >
                    <img src={props.src} alt={props.alt} />
                </div>
                <Button />
            </div>
        </div>
    )
}