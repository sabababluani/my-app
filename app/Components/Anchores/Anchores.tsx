'use client'

import { useState } from "react";
import Styles from "./Anchores.module.scss"
import Info from "./Info/Info";
import Login from "../LogIn/LogIn";
import Profile from "./Profile/Profile";

interface Props {
    isLog: boolean;
    style?: React.CSSProperties;
    src: string;
    alt: string;
    active?: boolean;
    setHandleClick: (value: boolean) => void;
    handleTaskDelete?: (index: any) => void;
    isActive?: boolean;
    handleClick: (value: boolean) => void;
}

export default function Anchores(props: Props) {

    const [isActive, setIsActive] = useState(false)
    const [userName, setUserName] = useState('')
    const [isLog , setIsLog] = useState(false)

    const toggleProfile = () => {
        props.handleClick(!isLog);
    };

    return (
        <div className={Styles.container} style={props.style}>
            {props.active && <Info displayPics />}
            <div className={Styles.wrapper} >
                <div className={Styles.buttons} onClick={() => props.setHandleClick(!props.isActive)} >
                    <img src={props.src} alt={props.alt} />
                </div>
                <Profile isLog={props.isLog} handleClick={toggleProfile} />
            </div>
        </div>
    )
}