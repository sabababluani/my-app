import React from 'react';
import AdjustButtons from '../AdjustButtons/AdjustButtons';
import ProgressBars from '../ProgressBars/ProgressBars';
import styles from './Player.module.scss';

type Props = {
    playing: boolean;
    currentTime: number;
    duration: number;
    progressRef: React.RefObject<HTMLInputElement>;
    ipadProgressRef: React.RefObject<HTMLInputElement>;
    onProgressChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onTenSecondsBack: () => void;
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
};

const Player = ({
    playing,
    currentTime,
    duration,
    progressRef,
    ipadProgressRef,
    onProgressChange,
    onTenSecondsBack,
    onVolumeDown,
    onVolumeUp,
    onPreviousSong,
    onNextSong,
    onPlayMusic,
}: Props) => {
    return (
        <div className={styles.musicMiddle}>
            <AdjustButtons 
                onVolumeDown={onVolumeDown}
                onVolumeUp={onVolumeUp}
                onPreviousSong={onPreviousSong}
                onNextSong={onNextSong}
                onPlayMusic={onPlayMusic}
                playing={playing}
            />
            <ProgressBars
                currentTime={currentTime}
                duration={duration}
                onProgressChange={onProgressChange}
                onTenSecondsBack={onTenSecondsBack}
                progressRef={progressRef}
                ipadProgressRef={ipadProgressRef}
            />
        </div>
    );
};

export default Player;
