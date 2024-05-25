import styles from "./Burger.module.scss"
import Icon from "./Icons/Icons"

export default function Burger() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <ul className={styles.wrapper}>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                    <li><Icon photo="peng.png" title="peng" /></li>
                </ul>
            </div>
        </div>
    )
} 