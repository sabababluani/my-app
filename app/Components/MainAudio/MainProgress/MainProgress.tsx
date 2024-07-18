import React from 'react';
import InputRange from '../../AudioPlayer/InputRange/InputRange';
import { formatTime } from '@/app/Helpers/audioHelpers';
import styles from './MainProgress.module.scss';

interface ProgressBarProps {
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    handleProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loop: boolean;
    toggleLoop: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    currentTime,
    duration,
    progressRef,
    handleProgressChange,
    loop,
    toggleLoop,
}) => {
    return (
        <div className={styles.progressBar}>
            <div className={styles.icons}>
                <img src="/shuffle.png" />
            </div>
            <p>{formatTime(currentTime)}</p>
            <InputRange
                defaultValue={String((currentTime / duration) * 100)}
                onChange={handleProgressChange}
                progressRef={progressRef}
            />
            <div className={styles.mobileTime}>
                <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
            </div>
            <p>{formatTime(duration)}</p>
            <div className={styles.icons} onClick={toggleLoop}>
                <img src={loop ? "/greenLoop.png" : "/disableLoop.png"} />
            </div>
        </div>
    );
};

export default ProgressBar;
