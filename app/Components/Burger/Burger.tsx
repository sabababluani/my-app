'use client'

import { useState } from "react"
import styles from "./Burger.module.scss"
import Icon from "./Icons/Icons"
import axios from "axios"


export default function Burger() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul className={styles.unlist}>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <li><Icon photo="peng.png" title="pingvini" /></li>
                    <div className={styles.containerButton}><button>Show Names</button></div>
                </ul>
                
            </div>
        </div>
    )
} 