import React from 'react';
import Image from 'next/image';
import styles from './AdjustButtons.module.scss';

type Props = {
    onVolumeDown: () => void;
    onVolumeUp: () => void;
    onPreviousSong: () => void;
    onNextSong: () => void;
    onPlayMusic: () => void;
    playing: boolean;
};

const AdjustButtons: React.FC<Props> = ({
    onVolumeDown,
    onVolumeUp,
    onPreviousSong,
    onNextSong,
    onPlayMusic,
    playing,
}) => {
    return (
        <div className={styles.adjustButtons}>
            <div className={styles.buttonWrapper}>
                <Image src="/valumedown.png" alt='volumeDownButton' width={24} height={24} onClick={onVolumeDown} />
            </div>
            <div className={styles.adjustButton}>
                <Image src="/previous.png" alt='previousMusicButton' width={24} height={24} onClick={onPreviousSong} />
            </div>
            <div onClick={onPlayMusic} className={styles.mainButton}>
                <Image src={playing ? "/pause.png" : "/play.png"} alt='playbutton' width={42} height={42} />
            </div>
            <div className={styles.adjustButton}>
                <Image src="/next.png" alt='nextMusicButton' width={24} height={24} onClick={onNextSong} />
            </div>
            <div className={styles.buttonWrapper}>
                <Image src="/valumeup.png" alt='volumeUpButton' width={24} height={24} onClick={onVolumeUp} />
            </div>
        </div>
    );
};

export default AdjustButtons;
