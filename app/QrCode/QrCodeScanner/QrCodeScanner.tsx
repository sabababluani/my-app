import React, { useRef, useState } from 'react';
import styles from './QrCodeScanner.module.scss';
import QrScanner from 'qr-scanner';

const QrCodeScanner = () => {

    const [file, setFile] = useState<any>(null);
    const [data, setData] = useState<any>(null)
    const fileRef = useRef<HTMLInputElement>(null);


    const handleClick = () => {
        fileRef.current.click();
    }

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]
        setFile(file);
        const result = await QrScanner.scanImage(file)
        setData(result)
    }
    return (
        <div className={styles.scanContainer}>
            <h3>Read QR Code</h3>
            <button onClick={handleClick}>Scan QR Code</button>
            <input
                ref={fileRef}
                type='file'
                accept='.jpg, .png, .jpeg'
                onChange={onChange}
            />
            <div className={styles.resultQr}>
                {file && (<img src={URL.createObjectURL(file)} alt="QR Code" />)}
                {data && <p className={styles.qrResultPAragraph}>{data}</p>}
            </div>
        </div>
    );
}

export default QrCodeScanner; 