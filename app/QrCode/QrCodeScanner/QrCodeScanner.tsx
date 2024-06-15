import { useState } from 'react';
import styles from './QrCodeScanner.module.scss';


const QrCodeScanner = () => {

    const [file , setFile] =useState(null);

    return (
        <div className={styles.scanContainer}>
            <h3>Read QR Code</h3>
            <button>Scan QR Code</button>
            <input
                type='file'
                accept='.jpg, .png, .jpeg'
                onChange={(e :any) => setFile(e.target.file[0])}
            />
        </div>
    );
}

export default QrCodeScanner; 