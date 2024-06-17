import { useState } from 'react';
import styles from './EditShortcut.module.scss'


type Props = {
    onCancel: () => void;
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const EditShortcut = (props: Props) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Edit shortcut</h1>
                <div className={styles.nameInput}>
                    <p>Name</p>
                    <input type="text" value={props.inputValue} />
                </div>
                <div className={styles.urlInput}>
                    <p>URL</p>
                    <input type="text" />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.cancelButton} onClick={props.onCancel}>Cancel</button>
                    <button className={styles.doneButton}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default EditShortcut;