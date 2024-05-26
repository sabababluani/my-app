'use client'

import Styles from "./Anchores.module.scss"
import Button from "./BlueButton/BlueButton"
import Info from "./Info/Info";

interface Props {
    style?: React.CSSProperties;
    src: string;
    alt: string;
    active?: boolean;
}

export default function Anchores(props: Props) {
    const userIsGeorgian = true;
    return (
        <div className={Styles.container} style={props.style}>
            {props.active && <Info displayPics />}
            <div className={Styles.wrapper} >
                <div className={Styles.buttons} >
                    <img src={props.src} alt={props.alt} />
                </div>
                <Button />
            </div>
        </div>
    )
}