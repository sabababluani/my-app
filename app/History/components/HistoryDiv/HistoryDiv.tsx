import React from 'react';
import styles from './HistoryDiv.module.scss';

interface Props {
    value: string;
    timestamp: string;
    historyUrl: string;
    isMarked: boolean;
    onMark: (isMarked: boolean) => void;
}

const HistoryDiv: React.FC<Props> = ({ value, timestamp, historyUrl, isMarked, onMark }) => {

    const isMarkedToDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
        onMark(e.target.checked);
    }
    
    return (
        <div className={styles.container}>
            <input type="checkbox"
                checked={isMarked}
                onChange={isMarkedToDelete}
            />
            <div className={styles.time}>
                <p>{timestamp}</p>
            </div>
            <p>{value}</p>
            <p>{historyUrl}</p>
        </div>
    );
};

export default HistoryDiv;
