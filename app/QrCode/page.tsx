'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import QRCode from 'qrcode.react'

const QrCode = () => {

    const [inputValue, setInputValue] = useState('')
    const [isAdded, setIsAdded] = useState(false)

    const onClick = () => {
        setIsAdded(true)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className={styles.page}>
            <div>
                <h1>Qr Code Reader Generator</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.QRInputContainer}>
                    <h3>Create QR Code</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.QRInputPlus}>
                            <input type="text" placeholder='Enter text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <button type="submit" onClick={onClick}>+</button>
                        </div>
                    </form>
                </div>
                <div className={styles.scanContainer}>
                    <h3>Read QR Code</h3>
                    <button>Scan QR Code</button>
                </div>
            </div>
            {isAdded && <div className={styles.qrCode}>
                <QRCode value={inputValue} />
            </div>}

        </div>
    )
}

export default QrCode;
