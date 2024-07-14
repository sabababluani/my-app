import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.scss';
import Image from "next/image";
import Link from 'next/link';

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

    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLInputElement>(null);
    const ipadProgressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
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
                setDuration(audioRef.current.duration);
            }
        };

        if (audioRef.current) {
            const audio = audioRef.current;
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            setPlaying(false);
            setCurrentTime(0);
            setDuration(0);
        }
    }, [currentSongIndex]);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = (e.target.valueAsNumber / 100) * duration;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const PlayMusic = () => {
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleTenSecondsBack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const handlePreviousSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
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
            setPlaying(true);
        }
    }, [currentSongIndex]);

    useEffect(() => {
        if (currentTime === duration) {
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        }
    }, [])

    return (
        <>
            <audio ref={audioRef} src={songs[currentSongIndex].audioSrc}></audio>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.musicPhoto}>
                        <div className={styles.photo}>
                            <Image src={songs[currentSongIndex].src} width={78} height={78} alt='musicPhoto' />
                        </div>
                        <div className={styles.musicInfo}>
                            <span className={styles.musicName}>{songs[currentSongIndex].music}</span>
                            <span className={styles.artistName}>{songs[currentSongIndex].artist}</span>
                        </div>
                    </div>
                    <div className={styles.musicMiddle}>
                        <div className={styles.adjustButtons}>
                            <div className={styles.buttonWrapper}>
                                <Image src="/valumedown.png" alt='volumeDownButton' width={24} height={24} onClick={handleVolumeDown} />
                            </div>
                            <div className={styles.adjustButton}>
                                <Image src="/previous.png" alt='previousMusicButton' width={24} height={24} onClick={handlePreviousSong} />
                            </div>
                            <div onClick={PlayMusic} className={styles.mainButton}>
                                <Image src={playing ? "/pause.png" : "/play.png"} alt='playbutton' width={42} height={42} />
                            </div>
                            <div className={styles.adjustButton}>
                                <Image src="/next.png" alt='nextMusicButton' width={24} height={24} onClick={handleNextSong} />
                            </div>
                            <div className={styles.buttonWrapper}>
                                <Image src="/valumeup.png" alt='volumeUpButton' width={24} height={24} onClick={handleVolumeUp} />
                            </div>
                        </div>

                        <div className={styles.progresWrapper}>
                            <div className={styles.ipadProgress}>
                                <div onClick={handleTenSecondsBack} className={styles.tensecondback}>
                                    <Image src="/gobackten.png" alt='tensecondback' width={24} height={24} />
                                </div>
                                <div className={styles.ipadRange}>
                                    <input
                                        type="range"
                                        className={styles.range}
                                        ref={ipadProgressRef}
                                        onChange={handleProgressChange}
                                        defaultValue="0"
                                    />
                                </div>
                            </div>
                            <div className={styles.mobileProgress}>
                                <div onClick={handleTenSecondsBack} >
                                    <Image src="/gobackten.png" alt='tensecodndback' width={24} height={22} />
                                </div>
                                <div className={styles.mobileTime}>
                                    <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
                                </div>
                            </div>

                            <div className={styles.progressBar}>
                                <p>{formatTime(currentTime)}</p>
                                <input
                                    type="range"
                                    className={styles.range}
                                    ref={progressRef}
                                    onChange={handleProgressChange}
                                    defaultValue="0"
                                />
                                <div className={styles.ipadTime}>
                                    <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
                                </div>
                                <p>{formatTime(duration)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrow}>
                        <Link href='#'>
                            <Image src='/Arroww.png' alt='arrow' width={32} height={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AudioPlayer;
