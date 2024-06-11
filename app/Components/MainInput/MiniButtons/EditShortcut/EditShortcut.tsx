import styles from './EditShortcut.module.scss'


const EditShortcut = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Edit shortcut</h1>
                <div className={styles.nameInput}>
                    <p>Name</p>
                    <input type="text" />
                </div>
                <div className={styles.urlInput}>
                    <p>URL</p>
                    <input type="text" />
                </div>
                <div className={styles.buttons}>
                    <button className={styles.cancelButton}>Cancel</button>
                    <button className={styles.doneButton}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default EditShortcut;