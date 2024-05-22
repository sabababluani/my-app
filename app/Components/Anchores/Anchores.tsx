'use client'

import Styles from "./Anchores.module.scss"
import Button from "./BlueButton/BlueButton"

export default function Anchores() {
    const userIsGeorgian = true 

    return (
        <div className={Styles.container}>
            <div className={Styles.anchore}>
                <a href="#">Gmail</a>
                <a href="#">{userIsGeorgian ? "სურათები" : "Photos"}</a>
            </div>
            <div className={Styles.wrapper}>
                <img src="9button.png" alt="Shuffle" />
                <Button />
            </div>
        </div>
    )
}