import React from 'react';
import styles from './HistoryDiv.module.scss';

interface Props {
    value: string;
    timestamp: string;
    historyUrl: string;
}

const HistoryDiv: React.FC<Props> = ({ value, timestamp, historyUrl }) => {


    return (
        <div className={styles.container}>
            <input type="checkbox" />
            <div className={styles.time}>
                <p>{timestamp}</p>
            </div>
            <p>{value}</p>
            <p>{historyUrl}</p>
        </div>
    );
};

export default HistoryDiv;
