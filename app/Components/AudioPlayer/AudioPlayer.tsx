import { useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.scss'
import { useRecoilState } from 'recoil';
import { audioPlayerState } from '@/app/atoms/states';
import AdjustButtons from './AdjustButtons/AdjustButtons';
import ProgressBars from './ProgressBars/ProgressBars';
import MusicPhoto from './MusicPhoto/MusicPhoto';
import ArrowLink from './Arrow/Arrow';

type Song = {
    src: string;
    music: string;
    artist: string;
    audioSrc: string;
};

type Props = {
    songs: Song[];
};

const AudioPlayer = ({ songs }: Props) => {
    const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLInputElement>(null);
    const ipadProgressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setAudioPlayer((prev) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
                const progressValue = String((audioRef.current.currentTime / audioRef.current.duration) * 100);
                if (progressRef.current) {
                    progressRef.current.value = progressValue;
                }
                if (ipadProgressRef.current) {
                    ipadProgressRef.current.value = progressValue;
                }
            }
        };

        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setAudioPlayer((prev) => ({ ...prev, duration: audioRef.current!.duration }));
            }
        };

        const handleEnded = () => {
            setAudioPlayer((prev) => ({
                ...prev,
                currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
                playing: true,
            }));
        };

        if (audioRef.current) {
            const audio = audioRef.current;
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [audioPlayer.currentSongIndex, songs.length]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            setAudioPlayer((prev) => ({ ...prev, playing: false, currentTime: 0, duration: 0 }));
        }
    }, [audioPlayer.currentSongIndex]);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
            audioRef.current.currentTime = newTime;
            setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
        }
    };

    const PlayMusic = () => {
        if (audioRef.current) {
            if (audioPlayer.playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setAudioPlayer((prev) => ({ ...prev, playing: !audioPlayer.playing }));
        }
    };

    const handleTenSecondsBack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
            setAudioPlayer((prev) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
        }
    };

    const handleNextSong = () => {
        setAudioPlayer((prev) => ({
            ...prev,
            currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
        }));
    };

    const handlePreviousSong = () => {
        setAudioPlayer((prev) => ({
            ...prev,
            currentSongIndex: (prev.currentSongIndex - 1 + songs.length) % songs.length,
        }));
    };

    const handleVolumeDown = () => {
        if (audioRef.current) {
            audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.2);
        }
    };

    const handleVolumeUp = () => {
        if (audioRef.current) {
            audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.2);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
            setAudioPlayer((prev) => ({ ...prev, playing: true }));
        }
    }, [audioPlayer.currentSongIndex]);

    return (
        <>
            <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc}></audio>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <MusicPhoto src={songs[audioPlayer.currentSongIndex].src} music={songs[audioPlayer.currentSongIndex].music} artist={songs[audioPlayer.currentSongIndex].artist} />
                    <div className={styles.musicMiddle}>
                        <AdjustButtons onVolumeDown={handleVolumeDown} onVolumeUp={handleVolumeUp} onPreviousSong={handlePreviousSong} onNextSong={handleNextSong} onPlayMusic={PlayMusic} playing={audioPlayer.playing} />
                        <ProgressBars currentTime={audioPlayer.currentTime} duration={audioPlayer.duration} onProgressChange={handleProgressChange} onTenSecondsBack={handleTenSecondsBack} progressRef={progressRef} />
                    </div>
                    <ArrowLink />
                </div>
            </div>
        </>
    );
}

export default AudioPlayer;
