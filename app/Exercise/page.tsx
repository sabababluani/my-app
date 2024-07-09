'use client'

import { useState } from "react";
import Button, { ButtonType, Mode } from "../Components/Button/Button"
import styles from './page.module.scss';


const Exercise = () => {

    const [categoty, setCategory] = useState(false)

    const onHandleClick = () => {
        setCategory(true);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>Vaooo</h1>
                    <input type="text" />
                    <input type="text" />
                    <Button title="Log In" mode={Mode.Fill} type={ButtonType.Text} />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.cont}>
                    <select onChange={onHandleClick}>
                        <option value="dd">vigac</option>
                        <option value="dd">ragac</option>
                        <option value="ddd">sadgac</option>
                        <option value="dd" >odesgac</option>
                    </select>
                    <div className={styles.wrapp}>
                        <div className={styles.cancel}>
                        <Button title="Cancel" mode={Mode.Outline} type={ButtonType.Text} />
                        </div>
                        <div className={styles.cancel}>
                            {categoty ? <Button title="Confirm" mode={Mode.Fill} type={ButtonType.Text} /> : <Button title="Confirm" mode={Mode.Fill} type={ButtonType.Text} disabled />}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.conti}>
                <div className={styles.clasi}>
                    <Button title="More" icon="/exit-log-out.png" type={ButtonType.IconText} />
                </div>
            </div>
        </>

    )
}

export default Exercise;