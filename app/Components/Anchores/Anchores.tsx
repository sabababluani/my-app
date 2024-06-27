import React, { useEffect } from "react";
import Styles from "./Anchores.module.scss";
import Info from "./Info/Info";
import Profile from "./Profile/Profile";
import { useRecoilState } from "recoil";
import { darkModeState } from "@/app/atoms/states";

type Props = {
    isLog: boolean;
    style?: React.CSSProperties;
    src: string;
    alt: string;
    active?: boolean;
    setHandleClick: (value: boolean) => void;
    handleTaskDelete?: (index: any) => void;
    isActive?: boolean;
    setIsLog: (value: boolean) => void;
}

const Anchores: React.FC<Props> = (props) => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleProfile = () => {
        props.setIsLog(!props.isLog);
    };

    return (
        <div className={Styles.container} style={props.style}>
            {props.active && <Info displayPics />}
            <div className={Styles.wrapper}>
                <div className={Styles.buttons} onClick={() => props.setHandleClick(!props.isActive)}>
                    <img src={props.src} alt={props.alt} />
                </div>
                <Profile isLog={props.isLog} handleClick={toggleProfile} />
            </div>
        </div>
    );
}

export default Anchores;
