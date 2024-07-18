import React from 'react';
import styles from './MainAudio.module.scss';
import { useAudioPlayer } from '@/app/Helpers/audioHelpers';
import { SongsProps } from '@/app/Interfaces/Interface';
import MainAdjust from './MainAdjust/MainAdjust';
import ProgressBar from './MainProgress/MainProgress';

const MainAudio: React.FC<SongsProps> = ({ songs }) => {
    const { audioRef, audioPlayer, progressRef, handleProgressChange, PlayMusic, toggleLoop, handleNextSong, handlePreviousSong, handleVolumeDown, handleVolumeUp } = useAudioPlayer(songs);
    const isPaused = audioRef.current ? audioRef.current.paused : false;

    return (
        <>
            <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc} loop={audioPlayer.loop}></audio>
            <div className={styles.container}>
                <div className={styles.controls}>
                    <MainAdjust
                        onVolumeDown={handleVolumeDown}
                        onVolumeUp={handleVolumeUp}
                        onPreviousSong={handlePreviousSong}
                        onNextSong={handleNextSong}
                        onPlayMusic={PlayMusic}
                        playing={isPaused}
                    />
                    <ProgressBar
                        currentTime={audioPlayer.currentTime}
                        duration={audioPlayer.duration}
                        progressRef={progressRef}
                        handleProgressChange={handleProgressChange}
                        loop={audioPlayer.loop}
                        toggleLoop={toggleLoop}
                    />
                </div>
            </div>
        </>
    );
};

export default MainAudio;
