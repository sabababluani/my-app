import { useState } from 'react';
import styles from './EditShortcut.module.scss'

type Props = {
    onCancel: () => void;
    inputValue: string;
    onInputChange: (e: string) => void;
    value: string;
    onSave: () => void;
    inputURL: string;
    onInputURL: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditShortcut = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Edit shortcut</h1>
                <div className={styles.nameInput}>
                    <p>Name</p>
                    <input type="text" defaultValue={props.inputValue} onChange={(e) => props.onInputChange(e.target.value)} />
                </div>
                <div className={styles.urlInput}>
                    <p>URL</p>
                    <input type="text" defaultValue={props.inputURL} onChange={() => props.inputURL} />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.cancelButton} onClick={props.onCancel}>Cancel</button>
                    <button className={styles.doneButton} onClick={props.onSave}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default EditShortcut;