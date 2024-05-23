'use client'

import Styles from "./Anchores.module.scss"
import Button from "./BlueButton/BlueButton"
import Info from "./Info/Info";

interface Props {
    style?: React.CSSProperties;
    src: string;
    alt: string;
}


export default function Anchores({ src, alt, style }: Props) {
    const userIsGeorgian = true

    return (
        <div className={Styles.container} style={style}>
            <Info style={{ display: "none" }} />
            <div className={Styles.wrapper}>
                <img src={src} alt={alt} />
                <Button />
            </div>
        </div>
    )
}