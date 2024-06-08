'use client'

import styles from "./Burger.module.scss"
import Icon from "./Icons/Icons"


export default function Burger() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ul className={styles.unlist}>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                    <li><Icon photo="peng.png" title="pingvini"/></li>
                </ul>
            </div>
        </div>
    )
} 