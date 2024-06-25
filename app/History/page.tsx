'use client'

import React, { useEffect, useState } from 'react';
import HistoryDiv from "./components/HistoryDiv/HistoryDiv";
import styles from './page.module.scss';

interface Task {
    value: string;
    id: number;
    timestamp: string;
    historyUrl: string;
}

const HistoryPage: React.FC = () => {
    const [history, setHistory] = useState<Task[]>([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('historyArray') || '[]') as Task[];
        setHistory(savedHistory);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div>
                <ul className={styles.container}>
                    {history.map((task) => (
                        <li key={task.id}>
                            <HistoryDiv 
                                value={task.value} 
                                timestamp={task.timestamp} 
                                historyUrl={task.historyUrl} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HistoryPage;