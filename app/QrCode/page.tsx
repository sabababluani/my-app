'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import QRCode from 'qrcode'
import QrCodeReact from 'qrcode.react'
import QrCodeScanner from './QrCodeScanner/QrCodeScanner'


const QrCode = () => {

    const [inputValue, setInputValue] = useState('');
    const [qrImageUrl, setQrImageUrl] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!inputValue) return alert('Please enter some value');
        const response = await QRCode.toDataURL(inputValue);
        setQrImageUrl(response);
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
                            <button type="submit">+</button>
                        </div>
                    </form>
                </div>
                <QrCodeScanner />
            </div>
            {qrImageUrl && <div className={styles.qrCode}>
                <a href={qrImageUrl} download='qr.png'>
                    <QrCodeReact value={inputValue} />
                </a>
            </div>}

        </div>
    )
}

export default QrCode;
