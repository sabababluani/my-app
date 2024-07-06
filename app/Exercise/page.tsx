'use client'

import { useState } from "react";
import Button from "../Components/Button/Button"
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
                    <Button title='Log In' mode='fill' />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.cont}>
                    <select onClick={onHandleClick}>
                        <option value="dd">vigac</option>
                        <option value="dd">ragac</option>
                        <option value="ddd">sadgac</option>
                        <option value="dd">odesgac</option>
                    </select>
                    <div className={styles.wrapp}>
                        <div className={styles.cancel}>
                            <Button title="Cancel" mode="fill" />
                        </div>
                        <div className={styles.cancel}>
                            {categoty ? <Button title="Confirm" mode="fill" /> : <Button title="Confirm" mode="fill" disabled />}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Exercise;