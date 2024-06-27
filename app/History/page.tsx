'use client'

import React, { useEffect, useState } from 'react';
import HistoryDiv from './components/HistoryDiv/HistoryDiv';
import styles from './page.module.scss';
import dayjs from 'dayjs';

const HistoryPage: React.FC = () => {
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('historyArray') || '[]');
        setHistory(savedHistory);
    }, []);

    const date = dayjs().format('dddd, MMMM D, YYYY');

    const markForDeleteHandler = (id: number, marked: boolean) => {
        const updatedHistory = history.map(task => {
            if (task.id === id) {
                return { ...task, markedForDelete: marked };
            }
            return task;
        });
        setHistory(updatedHistory);
    };

    const handleDeleteMarked = () => {
        const updatedHistory = history.filter(task => !task.markedForDelete);
        setHistory(updatedHistory);
        localStorage.setItem('historyArray', JSON.stringify(updatedHistory));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.historyContainer}>
                <img src="littleLogo.png" alt="Logo" />
                <h1>History</h1>
            </div>
            <div className={styles.deleteContainer}>
                <button onClick={handleDeleteMarked}>Delete</button>
            </div>
            <div className={styles.wrapperChild}>
                <div className={styles.dateContainer}>
                    <h2>{date}</h2>
                </div>
                <hr style={{ background: 'white', color: 'white' }} />
                <ul className={styles.container}>
                    {history.map((task) => (
                        <li key={task.id}>
                            <HistoryDiv
                                value={task.value}
                                timestamp={task.timestamp}
                                historyUrl={task.historyUrl}
                                isMarked={task.markedForDelete}
                                onMark={(marked) => markForDeleteHandler(task.id, marked)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HistoryPage;